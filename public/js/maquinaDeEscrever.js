
import {msgHora} from "/back/js/dataHora.js"

const msg = msgHora()
window.onload= ()=>{
    const text1 = document.querySelector(".text1")
    const text2 = document.querySelector(".text2")
    const text3 = document.querySelector(".text3")
    
    async function typeWrite(elemento, campo, callback = null) {
        const textoArray = elemento.toUpperCase().split('');
        var i = -1;
        while(textoArray[++i]) {
            await new Promise((res, rej) => {
                setTimeout(() => {
                    res(campo.innerHTML += textoArray[i]);
                }, 100);
            });
        };
        if (callback) {
            callback();
        }
    }
    const titulo1 = `${msg} ME CHAMO:`
    const titulo2 = "LEONARDO RESENDE DELGADO"
    const titulo3 = "Sou um DESENVOLVEDOR FULLSTACK</>"
    
    typeWrite(titulo1, text1, () => typeWrite(titulo2, text2, ()=> typeWrite(titulo3, text3)));
}


