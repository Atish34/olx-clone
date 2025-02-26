const Order = require("../models/Order")
const Product = require("../models/Product")

exports.getPublicProducts = async (req, res) => {
    const result = await Product.find()
    const order = await Order.find().select("-_id -user -name -price -description -productImg -quantity")
    res.json({ message: "product fetch success", result,order
    })
}

exports.getPublicProductDetails = async (req, res) => {
    const result = await Product.findById(req.params.productId)
    res.json({ message: "product details fetch success", result })
}