const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('testing.db','user','password',{
    dialect:'sqlite',
    host:'./database/student.db',
})

module.exports = sequelize