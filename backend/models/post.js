import { Sequelize}  from "sequelize";
import db from "../db/conectDb.js" 
const Post = db.define('posts',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Description:{
        type: Sequelize.STRING,
        allowNull: true
    },
    text:{
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    Image:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

Post.sync()
export default Post