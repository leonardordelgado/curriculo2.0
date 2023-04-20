import { data } from "../class/Data.js";

const Data = new data
export function msgHora(){
    if(Data.hora>= 6 && Data.hora<12) return "BOM DIA!"
    
    if(Data.hora>= 12 && Data.hora<18) return "BOA TARDE!"

    if(Data.hora>= 18 || Data.hora < 6) return "BOA NOITE!"


}
