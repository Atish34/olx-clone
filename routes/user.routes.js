const { addProduct, getProduct, deleteProduct, updateProduct, getUserProductDetails, placeOrder, getUserOrder, } = require("../controller/user.controller")

const router = require("express").Router()
router

    // product CRUD
    .post("/addProduct-user", addProduct)
    .get("/getProduct-user", getProduct)
    .put("/updateProduct-user/:_id", updateProduct)
    .delete("/deleteProduct-user/:_id", deleteProduct)
    .get("/get-user-product/:productId", getUserProductDetails)
    .post("/place-order", placeOrder)
    .get("/get-user-order", getUserOrder)

module.exports = router