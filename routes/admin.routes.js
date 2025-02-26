const { AdminAllUsers, getAdminProducts, adminBlockUnblockUser, getAdminOrder } = require("../controller/admin.controller")

const router = require("express").Router()
router
    .get("/allUsers-admin", AdminAllUsers)
    .get("/getProduct-admin", getAdminProducts)
    .put("/update-customer-active/:aid", adminBlockUnblockUser)
    .get("/get-admin-order", getAdminOrder)

module.exports = router