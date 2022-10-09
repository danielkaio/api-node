import express from 'express';
import LivroController from '../controller/LivroController.js';




const router = express.Router();

router
.get("/livros",LivroController.listar)
.post('/livros',LivroController.criar)


export default router