import puppeteer from "puppeteer";
import fs from "fs"
export async function pupper(){
    
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://cursos.alura.com.br/user/leonardoresende311015/fullCertificate/b57f627bd6abf81d500dd006a1e7b172')
    
        
       const  list =  await page.evaluate(()=>{
            const couserList = document.querySelectorAll(".content-category .content-courseList-courseName")
            const titleList = document.querySelectorAll(".content-category .content-item-title")
    
            const listArray = [...couserList]
            const listTitle = [...titleList]

            const curso = listArray.map(li =>({
                cursos: li.innerText
            }))
            const title = listTitle.map(li =>({
                title: li.innerText
            }))
            return {
                title,
                curso
            }
        })

        fs.writeFile('listAlura.json', JSON.stringify(list, null, 2), err =>{
            
        })
          
        await browser.close()
}

