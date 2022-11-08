const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const app = express();
const port = 3000;

//Hello World
app.get('/' , (req, res) =>{
    res.send('Hello World');
})

//Image Server
app.get('/image', (req, res) => {
    let imagePath = path.join(__dirname, 'img1.jpg')
    res.sendFile(imagePath)
})

//Getting Image Name
app.get('/getName', (req, res) => {
    imageName = req.query.imagename;
    res.send(imageName);
}) //http://localhost:3000/getName?imagename=img1.jpg

//Dynamic Image Server
app.get('/dyImg' , (req, res) => {
    img = req.query.imgname
    let imagePull = path.join(__dirname, img);
    res.sendFile (imagePull)
//Error Mssage
    fs.readFile(img, (err)=>{
        res.status(640).end("Sorry! Image not found.")
    })
})  //http://localhost:3000/dyImg?imgname=img2.jpg



app.listen(port , () =>{
    console.log(`Server is listening on http://localhost:${port}`)
})