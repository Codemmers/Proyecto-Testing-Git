import {crearTODO} from './adderTask.js'
import {templateTask} from './adderTask.js'
import {introduceTODO} from './adderTask.js'
import {addTODO} from './adderTask.js'
import {taskListContainer} from './adderTask.js'



const deleteTODO = document.querySelectorAll('.deleteTODO')
const editTODO = document.querySelectorAll('.editTODO')
const parentTaskItem = document.getElementById('taskItemTemplateContainer')


deleteTODO.forEach(btn => {
    btn.addEventListener("click", e => {
        console.log(e.target)
    })
})


class Task {
    constructor(input) {
        this.input = input
    }

    addTodo() {
        addTODO.addEventListener('click', crearTODO)
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                crearTODO()
            } else {
                return
            }
        })
    }   

    editarTodo() {

    }

    eliminarTodo() {
        // const deleteTODOS = (taskContainer,div) => {
        //    taskContainer ? taskContainer.parentNode.removeChild(div) : console.log('Nothing') 
        // }
        // deleteTODO.addEventListener('click', () => deleteTODOS(templateTask,taskListContainer))
    }
}

const tarea = new Task()
tarea.addTodo()
tarea.editarTodo()
tarea.eliminarTodo()









// const header_menu__profile = document.querySelector(".header_menu__profile")
// const nav_login = document.querySelector(".nav_login")
// const deleteTODO = document.querySelectorAll(".deleteTODO")


// const introduceTODO = document.getElementById('introduceTODO')
// const templateTask = document.getElementById('taskItemTemplate').content
// const taskListContainer = document.querySelector(".taskList__Container")

// // * FUNCIÓN PARA RECIBIR EL INPUT DEL TODO 





// // * BORRAR VALORES DEL INPUT DESPUÉS DE CREAR TODO

// const resetInputValue = (task) => {
//     task.value = '';
// }

// // * PULSAR ENTER PARA CREAR TODO

// document.addEventListener('keyup', (event) => {
//     if (event.keyCode == 13){
//         crearTODO()
//     } else {
//         return
//     }
// })

// document.addEventListener("DOMContentLoaded", ()=>{


//     // //* AÑADE EFECTO DE ANIMACIÓN AL MOSTRAR EL LOGIN
//     // header_menu__profile.addEventListener("click", ()=>{
//     //     nav_login.classList.toggle("showLogin")
//     // })


//     deleteTODO.forEach(task => {
//         task.addEventListener("click", (e)=>{
//             let taskContainer = e.target.parentElement.parentElement
//             removerTask(taskContainer)
//         })
//     })
// })