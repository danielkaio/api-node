import express from 'express';
import LivroController from '../controller/LivroController.js';




const router = express.Router();

router
.get("/livros",LivroController.listar)
.get('/livros/:id',LivroController.listarId)
.post('/livros',LivroController.criar)
.put("/livros/:id",LivroController.atualizar)
.delete("/livros/:id",LivroController.deletar)


export default router