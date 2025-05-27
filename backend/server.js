const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect('mongodb://ozkankarakus:gizli123@ac-5zi7cqr-shard-00-00.elwu5l0.mongodb.net:27017,ac-5zi7cqr-shard-00-01.elwu5l0.mongodb.net:27017,ac-5zi7cqr-shard-00-02.elwu5l0.mongodb.net:27017/?replicaSet=atlas-92oepr-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB bağlantısı başarılı'))
  .catch((err) => console.error('❌ MongoDB bağlantı hatası:', err));

// Not Modeli
const noteSchema = new mongoose.Schema(
  { text: String },
  {timestamps:true}

);
const Note = mongoose.model('Note', noteSchema);

// ✔ GET /notes – Tüm notları getir
app.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).send('Notlar alınırken hata oluştu');
  }
});

// ✔ POST /notes – Yeni not oluştur
app.post('/notes', async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).send("Not metni boş olamaz");
  }

  try {
    const newNote = new Note({ text });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).send("Not eklenirken hata oluştu");
  }
});

// ✔ DELETE /notes/:id – Notu sil
app.delete('/notes/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).send("Silinecek not bulunamadı");
    }

    res.json({ success: true, deletedNote });
  } catch (err) {
    res.status(500).send("Not silinirken hata oluştu");
  }
});

// ✔ PUT /notes/:id – Notu güncelle
app.put('/notes/:id', async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).send("Not metni boş olamaz");
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { text },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).send("Not bulunamadı");
    }

    res.json(updatedNote);
  } catch (err) {
    res.status(500).send("Güncelleme sırasında hata oluştu");
  }
});

// Ana rota (opsiyonel)
app.get('/', (req, res) => {
  res.send("📝 Not API aktif - /notes endpointini kullanabilirsiniz");
});

// Sunucuyu başlat

const animeRoutes = require('./routes/anime');
app.use('/api/anime', animeRoutes);
app.listen(5000, () => {
  console.log('🚀 Backend http://localhost:5000 üzerinde çalışıyor');
});
