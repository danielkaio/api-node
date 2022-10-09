import express from 'express'
import livros from '../routes/livroRoutes.js'


const routes = (app)=>{

    app.route("/").get((req,res)=>{
        res.status(200).send({titulo:"api com express"})
    })

    app.use(
        express.json(),
        livros
    )

}

export default routes
