const express = require('express')
const router = express.Router()
const multer=require('multer')

const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images")
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img)
    // fn(null,"image1.jpg")
  }
})

const upload = multer({ storage: storage })
router.post("/", upload.single("file"), (req, res) => {
  // console.log(req.body)
  res.status(200).json("Image has been uploaded successfully!")
})


module.exports = router;
