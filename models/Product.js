const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    order: { type: mongoose.Types.ObjectId, ref: "order", required: false },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    productImg: { type: [String], required: true },
    quantity: { type: Number, required: true },
})

module.exports = mongoose.model("product", productSchema)