const {Model,DataTypes} = require('sequelize');
const sequelize = require('./userdatabase')
class User extends Model{}

User.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    class:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    modelName:'user',
    timestamps:false
})

module.exports = User
