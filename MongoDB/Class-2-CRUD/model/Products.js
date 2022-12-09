//creating Product Schema
import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
})
let Product = mongoose.model('product', ProductSchema)    //here passing 2 args-- product-table name and ProductSchema-schema name

export default Product