
import alura from '../../listAlura.json' assert { type: "json" };

export function lerJasonTitle(){
    const title = []
     alura.title.map((item)=>{
       title.push(item)
    })
   return title
}
export function lerJasonCourse(){
   const course = []
     alura.curso.map((item)=>{
       course.push(item)
    })
   return course
}

