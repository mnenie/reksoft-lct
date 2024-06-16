import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";


import {checkAuth, handleValidationErrors, gpt} from "./utils/index.js";
import { UserController, PostController, GptController } from "./controllers/index.js";
import File from "./models/File.js";

mongoose.set("strictQuery", false);

dotenv.config();
const MONGO_DB = process.env.MONGO_DB;

mongoose
    .connect(MONGO_DB)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads') );

const pdfstorage = multer.diskStorage({
    destination : (_, __, cb)=>{
        cb(null, 'uploads/pdfs/');
    },
    filename:(_, file, cb)=>{
        cb(null, file.originalname);
    },
});

const imagestorage = multer.diskStorage({
    destination : (_, __, cb)=>{
        cb(null, 'uploads/images/');
    },
    filename:(_, file, cb)=>{
        cb(null, file.originalname);
    },
});
const pdfFileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Некорректный тип файла. Пожалуйста, загрузите PDF.'), false);
    }
  };
  
  // Настройка фильтрации изображений
  const imageFileFilter = (req, file, cb) => {
    if (['image/jpeg', 'image/png', 'image/gif'].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Некорректный тип файла. Пожалуйста, загрузите изображение в формате JPEG, PNG или GIF.'), false);
    }
  };

const uploadPdf = multer({ 
    storage: pdfstorage,
    fileFilter: pdfFileFilter
  });
const uploadImage = multer({ 
    storage: imagestorage,
    fileFilter: imageFileFilter
  });
app.listen(1234, (err)=>{
    if (err) {
        return console.log(err);
    }

    console.log('Server OK ');
});

app.get('/', (req,res) => {
    res.send('Гугуца батрачит')
});
app.post('/auth/login', handleValidationErrors, UserController.login);
app.post('/auth/register', handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);
app.patch('/auth/redact', checkAuth, UserController.update);

app.post('/upload/pdf', checkAuth, async (req, res) => {
  try {
      const newFile = new File({
        url: req.body.url,
        name: req.body.name,
        size: req.body.size
      });
      await newFile.save();
      
      res.json({ _id: newFile._id, url: newFile.url });
  } catch (err) {
      res.status(500).json({ message: 'Не удалось сохранить файл' });
  }
});
app.post('/upload/image', checkAuth, async (req, res) => {
  try {
    const newFile = new File({
      url: req.body.url,
      name: req.body.name,
      size: req.body.size
  });
  await newFile.save();
      
      res.json({ _id: newFile._id, url: newFile.url });
  } catch (err) {
      res.status(500).json({ message: err.message
       });
  }
});
app.get('/files/:id', async (req, res) => {
  try {
      const file = await File.findById(req.params.id);
      
      if (!file) {
          return res.status(404).json({ message: 'Файл не найден' });
      }
      
      res.json(file);
  } catch (err) {
      res.status(500).json({ message: 'Не удалось найти файл' });
  }
})




app.get('/posts', PostController.getAll);
app.post('/posts', checkAuth, handleValidationErrors, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth, handleValidationErrors, PostController.update);
app.post('/posts/:id/comments', checkAuth, handleValidationErrors, PostController.addComment);
app.put('/posts/:id/like', checkAuth, handleValidationErrors,PostController.like);
app.put('/posts/:id/unlike', checkAuth, handleValidationErrors,PostController.unlike);
app.post('/gpt/podborka', GptController.podborka);
app.post('/gpt/pdfanalizer', GptController.pdfanalizer);




