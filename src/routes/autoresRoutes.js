import express from 'express';
import AutorController from '../controller/autoresController.js';




const router = express.Router();

router
.get("/autores",AutorController.listar)
.get('/autores/:id',AutorController.listarId)
.post('/autores',AutorController.criar)
.put("/autores/:id",AutorController.atualizar)
.delete("/autores/:id",AutorController.deletar)


export default router