let templateTask = document.getElementById('taskItemTemplate').content
const introduceTODO = document.getElementById('introduceTODO')
const addTODO = document.getElementById('addTODO')
let taskListContainer = document.querySelector('.taskList__Container')
const deleteTODO = document.querySelector('.deleteTODO')
const editTODO = document.querySelector('.editTODO')
const parentTaskItem = document.getElementById('taskItemTemplateContainer')



// * FUNCIÓN AÑADIR TODO


class Task {
    constructor(input) {
        this.input = input
    }

    addTodo() {
        addTODO.addEventListener('click', crearTODO)
    }   

    editarTodo() {

    }

    eliminarTodo() {
        const deleteTODOS = (taskContainer,div) => {
           taskContainer ? taskContainer.parentNode.removeChild(div) : console.log('Nothing') 
        }
        deleteTODO.addEventListener('click', () => deleteTODOS(templateTask,taskListContainer))
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