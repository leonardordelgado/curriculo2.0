function serverPort(){
    if(process.env.PORT){
        return process.env.PORT
    }else{
        return process.env.SERVER_DEV
    }
}
export default serverPort