import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    title: {type: String, req: true},
    description: String,
    price: {type: Number, req: true},
    images: [{type: String}],
    category: { type:mongoose.Schema.Types.ObjectId, ref:'Category'},
    
});

export const Product = models.Product || model('Product', ProductSchema)

