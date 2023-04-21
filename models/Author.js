import mongoose from "mongoose";

let schema = new Schema({
    name: {type:String, required: true},
    last_name: {type:String, required: false},
    city: {type:String, required: true},
    country: {type:String, required:true},
    date: {type:Date, required:false},
    photo: {type:String, required:true},
    active: {type:boolean, required:true},
    user_id: {type:mongoose.Types.ObjectId, ref:'users', required:true} //Tipo de datos de mongoose para referenciar datos de una collecion con datos de otra coleccion (En este caso la colleccion de autores con la coleccion de usuarios)
},{
    timestamps:true
})

let collection = 'Authors'

let Author = mongoose.model(schema, collection)

export default Author;