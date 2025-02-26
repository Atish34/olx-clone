const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "user",reqiured: true },
  product: { type: mongoose.Types.ObjectId, ref: "product",reqiured: true },
  name: { type: String, reqiured: true },
  price: { type: String, reqiured: true },
  description: { type: String, reqiured: true },
  quantity: { type: String, reqiured: true },
  productImg: { type: [String], reqiured: true },
  
},{timestamps: true});

module.exports = mongoose.model("order", orderSchema);
