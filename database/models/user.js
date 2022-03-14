const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../usuarios');

class User extends Model {}
User.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        require: true
    },
    email:{
        type: DataTypes.STRING,
        require: true
    },
    password:{
        type: DataTypes.STRING,
        require: true
    }

},{
    sequelize,
    modelName: "User"
})

module.exports= User;