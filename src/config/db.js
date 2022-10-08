import mongoose from "mongoose";



mongoose.connect("mongodb://localhost/alura");

let db = mongoose.connection;


export default db