const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");


exports.AdminAllUsers = asyncHandler(async (req, res) => {
    const result = await User.find()
        .select("-createdAt -updatedAt -__v -password -otp -otpSendOn")
        .sort({ createdAt: -1 })
    return res.json({ message: "All users fetch success", result })
})


exports.getAdminProducts = asyncHandler(async (req, res) => {
    const result = await Product
    .find()
    .populate("user","name email mobile")
    res.json({ meassage: "get product success", result })

})


exports.adminBlockUnblockUser = asyncHandler(async (req, res) => {
    const {aid} = req.params
    await User.findByIdAndUpdate(aid, { isActive: req.body.isActive },{new:true})
    res.json({ message: "Account block success" })
})

exports.getAdminOrder = asyncHandler(async (req, res) => {
    const result = await Order
    .find()
    .populate("user","name mobile email")
    .populate({
        path: "product",                     
        populate: {
            path: "user",                    
            select: "name email mobile"      
        }
    })

    res.json({ meassage: "get order success", result })

})