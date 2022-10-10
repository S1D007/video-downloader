const cors = require("cors");
const express = require('express')
const app = express()
const helmet = require("helmet")
const axios = require("axios")
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.get('/',(req,res)=>{
      res.header("Access-Control-Allow-Origin", "*");
    const {videoUrl} = req.query
    const url = `https://keepsaveit.com/api?api_key=7F81Ih4wvsZgCJLC9me8bEZBgIyhWVWT02wJezd1xuw8jLTcnd&url=${videoUrl}`
    axios.get(url).then((e)=>{
        res.send(e.data)
    })
})


app.listen(1212)