import autores from "../models/autor.js";

class AutorController {

    static listar = (req, res) => {

        autores.find((err, autores) => {
            res.status(200).json(autores)

        })
    }


    static listarId = (req,res)=>{

        const id = req.params.id
        autores.findById(id,(err,autores)=>{
            if (err){
                res.status(400).send({message:`${err.message} - id não existe`})
            }else{
                res.status(200).send(autores)
            }
        })
    }

    static criar = (req,res)=>{
        let autor = new autores(req.body)
        autor.save((err)=>{
            if (err){
                res.status(500).send({message:`${err.message}- falha ao cadastrar o autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizar =(req,res)=>{

        const id = req.params.id
        autores.findByIdAndUpdate(id , {$set:req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:"autor atualizado com sucesso"})
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }

    static deletar =(req,res)=>{
        const id = req.params.id
        autores.findByIdAndRemove(id,(err)=>{
            if (! err){
                res.status(200).send({message:"autor excluido"})
            }else{
                res.status(500).send({message:err})
            }
        })
    }
}

export default AutorController