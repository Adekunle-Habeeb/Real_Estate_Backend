const multer = require("multer");
const uploadController = require("express").Router();

//destination => where the image will be saved
//filename 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename)
    }
})


const upload = multer({
    storage
})


//upload.single("image")
uploadController.post("/image", upload.single("image"), async(req, res) => {
    try {
        return res.status(200).json("file uploaded successful")
    } catch (error) {
        console.log(error);
        
    }
})



module.exports = uploadController