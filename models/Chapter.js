import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    manga_id: {type:mongoose.Types.ObjectId, ref:'mangas', requiered:true},
    title: {type:String, requiered:true},
    cover_photo: {type:String, requiered:true},
    pages: [{type:String, requiered:true}],
    order: {type:Number, requiered:true}
},{
    timestaps:true
})

let collection = 'Chapters'
let Chapter = mongoose.model(collection, schema);
export default Chapter;
