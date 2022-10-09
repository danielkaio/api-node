import livros from "../models/livro.js";

class LivroController {

    static listar = (req, res) => {

        livros.find((err, livros) => {
            res.status(200).json(livros)

        })
    }


    static listarId = (req,res)=>{

        const id = req.params.id
        livros.findById(id,(err,livros)=>{
            if (err){
                res.status(400).send({message:`${err.message} - id não existe`})
            }else{
                res.status(200).send(livros)
            }
        })
    }

    static criar = (req,res)=>{
        let livro = new livros(req.body)
        livro.save((err)=>{
            if (err){
                res.status(500).send({message:`${err.message}- falha ao cadastrar o livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizar =(req,res)=>{

        const id = req.params.id
        livros.findByIdAndUpdate(id , {$set:req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:"livro atualizado com sucesso"})
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }

    static deletar =(req,res)=>{
        const id = req.params.id
        livros.findByIdAndRemove(id,(err)=>{
            if (! err){
                res.status(200).send({message:"livro excluido"})
            }else{
                res.status(500).send({message:err})
            }
        })
    }
}

export default LivroController