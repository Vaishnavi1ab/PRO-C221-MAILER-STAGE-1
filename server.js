const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailrer = require('nodemailer');

const transporter = nodemailrer.createTransport({
    port:465,
    host:"smpt.gmail.com",
    auth:{
        user:'anitaishu2018@gmail.com',
        pass:'pvdzrptiuyyiszht'
    },
    secure:true,

})