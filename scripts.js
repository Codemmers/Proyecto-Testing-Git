const templateTask = document.getElementById('taskItemTemplate').content
const introduceTODO = document.getElementById('introduceTODO')
const addTODO = document.getElementById('addTODO')
const taskListContainer = document.querySelector('.taskList__Container')
const deleteTODO = document.querySelector('.deleteTODO')



// * FUNCIÓN AÑADIR TODO


class Task {
    constructor(input) {
        this.input = input
    }

    addTodo() {
        const crearTODO = () => {
            if ((introduceTODO.value).trim().length === 0) {
                return 
            } else {
                addTODOS(templateTask, taskListContainer, introduceTODO)
                resetInputValue(introduceTODO)
            }
        }
        const addTODOS = (template, div, task) => {
            const templateClone = document.importNode(template,true)
            const templateDiv = templateClone.querySelector('div')
            const taskTitle = templateDiv.querySelector('h3')
            taskTitle.textContent = task.value
            div.appendChild(templateDiv)
        }
        addTODO.addEventListener('click', crearTODO)
        const resetInputValue = (task) => {
            task.value = ''
        }
        document.addEventListener('keyup', (event) => {
            if (event.keyCode == 13){
                crearTODO()
            } else {
                return
            }
        })
    }   

    editarTodo() {
        console.log(`${this.input} añadido`)
    }

    eliminarTodo() {
        const borrarTODO = () => {
            deleteTODO.addEventListener('click', () => {
                console.log('Delete element')
            })
        }
        borrarTODO()
    }
}

const tarea = new Task()
tarea.addTodo()
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