const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://post-frontenf.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
const uplaod = multer({storage: multer.memoryStorage()})



app.post('/create-post' , uplaod.single("image"), async(req ,res)=>{

   
const result = await uploadFile(req.file.buffer)

console.log(result.url);
const posts = await postModel.create({
    image : result.url,
    caption: req.body.caption
})
console.log(result.url);

return res.status(201).json({
    mssage :"post created successfully"
})

})

app.get('/posts',async(req,res)=>{

    const post = await postModel.find()

    return res.status(200).json({
        message : "post fetched successfully",
        post
    })
})


module.exports = app;