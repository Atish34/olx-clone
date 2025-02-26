const { getPublicProductDetails, getPublicProducts } = require("../controller/public.contoller")

const router = require("express").Router()
router
    .get("/products", getPublicProducts)
    .get("/product-details/:productId", getPublicProductDetails)

module.exports = router