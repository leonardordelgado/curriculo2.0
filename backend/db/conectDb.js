import { Sequelize}  from "sequelize";// estanciamento do orm sequelize
import * as dotenv from "dotenv" //esstancia para usar o .env
import { error } from "console";// informes de erros
dotenv.config()// configuração da estamcia do .env

//VARIAVEIS DE DESENVOLVIMENTO
const DATABASE = process.env.DB_DATABASE
const USER = process.env.DB_USER
const HOST= process.env.DB_HOST
const PASSWORD= process.env.DB_PASSWORD

//VARIAVEIS DE PRODUÇÃO
const DATABASE_PRODUCTION = process.env.DB_DATABASE_PRODUCTION
const USER_PRODUCTION = process.env.DB_USER_PRODUCTION
const HOST_PRODUCTION = process.env.DB_HOST_PRODUCTION
const PASSWORD_PRODUCTION = process.env.DB_PASSWORD_PRODUCTION

//função que ira verificar de em qual banco deve ser conectar  
function dbConect(){
  if(process.env.NODE_ENV == "production"){
    return new Sequelize(DATABASE_PRODUCTION,USER_PRODUCTION,PASSWORD_PRODUCTION,{
      host:HOST_PRODUCTION,
      dialect:'mysql'
    })
  }else{
      return  new Sequelize(DATABASE,USER,PASSWORD,{
        host:HOST,
         dialect:'mysql'
     });
  }
}

const db = dbConect()
 try {
    await db.authenticate();
    console.log('Conexão com a base de dados realizada com sucesso.');
  } catch (error) {
    console.error('Erro na conexão:', error);
  }
  
export default db
