const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.sendFile('index.html');
    console.log(req.url);
} );

app.listen(port, ()=>console.log('vrblocks running on '))