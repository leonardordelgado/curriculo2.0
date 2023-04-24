import fs from "fs"

import * as cheerio from 'cheerio'
import axios from "axios";


export function axiosAlura(){
axios.get('https://cursos.alura.com.br/user/leonardoresende311015/fullCertificate/b57f627bd6abf81d500dd006a1e7b172')
.then(resp =>{
    const $ = cheerio.load(resp.data)
const list = ()=>{
    const PesquisaElementosCursos = $(".content-category .content-courseList-courseName")
    const titleList = $(".content-category .content-item-title")

    const ListCursosArray = [...PesquisaElementosCursos]
    const ListTitleArray = [...titleList]

    
    const cursos = []
    const titles = [] 
    ListCursosArray.forEach(Element=>{
        cursos.push(Element.children[0].data.replace(/(\r\n|\n|\r)/gm, "").replace(/            /g," "))
    })

    ListTitleArray.forEach(Element=>{
        titles.push(Element.children[0].data.replace(/(\r\n|\n|\r)/gm, "").replace(/\s/g, ''))
    })

    const curso = cursos.map(itens =>({
        cursos: itens
    }))

    const title = titles.map(itens =>({
        title: itens
    }))

    return {curso,title}      
}
fs.writeFile('listAlura.json', JSON.stringify(list(), null, 2), err =>{
            
})

})
}