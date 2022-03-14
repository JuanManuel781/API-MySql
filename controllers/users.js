const mysql2 = require('mysql');
const User = require('../database/models/user');

//Crear un usuario 
const register = (req, res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save((err, usr)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
    })
}
module.exports= { register }
