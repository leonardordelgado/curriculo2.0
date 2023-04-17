import express  from "express";//estancia do express
import handlebars from "express-handlebars";//estanciando o hbs
import PORT from "./backend/server/server.js"
//configurações do banco de dados
import db from "./backend/db/conectDb.js";//estancia da conexão com o banco
import Users from "./backend/models/user.js";//estancia do model de usuario
import Post from "./backend/models/post.js";//estancia do model dos posts

const app = express()//referenciando o express

//rotas
import home from "./backend/routers/home/home.js";//apontamento para a rota home
import externo from "./backend/routers/externo/externo.js"
//configuração do hbs
app.engine('hbs', handlebars.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
//fim da configuração do handlebars

//define a busca principal de arquivos como (CSS,JAVASCRIPTS,IMG etc..)
app.use("/pub", express.static("public"))
app.use('/back', express.static("backend"))

//middleware
app.use(express.json());
app.use((req, res, next) =>{
    console.log("testendo o midleware")
    next()
})

//use de rotas
app.use("/", home)// informe de user da rota 
app.use("/externo/", externo)
app.listen(PORT(),()=>{
    console.log("servidor em execuxão")
})