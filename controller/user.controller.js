const Order = require("../models/Order")
const Product = require("../models/Product")
const User = require("../models/User")
const cloud = require("../utils/cloudinary")
const { upload } = require("../utils/upload")
const path = require("path")


// product crud
exports.addProduct = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload" })
        }

        if (req.files) {

            // const allImages = []
            // for (const item of req.files) {
            //     const { secure_url } = await cloud.uploader.upload(item.path)
            //     allImages.push(secure_url)
            // }
            // console.log(allImages)

            //promise all start
            const allImages = []
            const heros = []
            for (const item of req.files) {    //loop mein kabhi bhi promises ka code nhi likhte isliye allImages ka empty array ka variable banaya
                allImages.push(cloud.uploader.upload(item.path))
            }
            const data = await Promise.all(allImages)
            for (const item of data) {
                heros.push(item.secure_url)
            }
            //promise all end

            const result = 
            await Product.create({ ...req.body,user:req.loggedInUser, productImg: heros })

            res.json({ meassage: "add Product success", result })
        } else {
            res.status(400).json({ message: "Product img is required" })
        }
        
        // console.log(req.file)  //multer.single()
        // console.log(req.files)  // //multer.array()
    })
}

exports.getProduct = async (req, res) => {
    const result = await Product.find()
    res.json({ meassage: "get Product success", result })

}

exports.updateProduct = async (req, res) => {
    upload(req, res, async err => {
        try {
            const allImages = []
            if (req.files && req.files.length > 0) {
                // upload new image
                for (const item of req.files) {
                    const { secure_url } = await cloud.uploader.upload(item.path)
                    allImages.push(secure_url)
                }
            }
            const oldProduct = await Product.findById(req.params._id)
            if (req.body.remove) {
                // remove image
                const result = oldProduct.productImg.filter(item => !req.body.remove.includes(item))
                oldProduct.productImg = result
                if (typeof req.body.remove === 'string') {  //req.body.remove mein string aaya to ye code run hoga (single image to remove)
                    await cloud.uploader.destroy(path.basename(req.body.remove, path.extname(req.body.remove)))
                } else { //req.body.remove mein array aya to ye code run hoga (multiple image to remove)
                    for (const item of req.body.remove) {
                        await cloud.uploader.destroy(path.basename(item, path.extname(item)))
                    }
                }
            }
            console.log(allImages)
            // change only data
            await Product.findByIdAndUpdate(req.params._id, { ...req.body, productImg: [...oldProduct.productImg, ...allImages] })
            res.json({ meassage: "update Product success" })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "something went wrong" })
        }
    })

}

exports.deleteProduct = async (req, res) => {
    const result = await Product.findById(req.params._id)
    // step 1 delete from cloudianry
    for (const item of result.productImg) {
        await cloud.uploader.destroy(path.basename(item, path.extname(item)))  //path.extname(item) ==> removes extension of the item
    }
    // step 2 delete from database
    await Product.findByIdAndDelete(req.params._id)
    res.json({ meassage: "delete Product success" })
}

exports.getUserProductDetails = async (req, res) => {
    const result = await Product.findById(req.params.productId)
    res.json({ message: "product details fetch success", result })
}

exports.placeOrder = async (req, res) => {
    console.log(req.body);
    
         await Order.create({
            user: req.loggedInUser,
            product: req.body.productId,
            name: req.body.data.name,
            price: req.body.data.price,
            description: req.body.data.description,
            quantity: req.body.data.quantity,
            productImg: req.body.data.productImg
        })
        res.json({ message: "order place success"})
    }

exports.getUserOrder = async (req, res) => {
    const result = await Order
    .find()
    .populate("user","name mobile email")
    res.json({ meassage: "get order user success", result })
}
       
               