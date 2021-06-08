



// import {removerTask} from "./removerTask.js";

const header_menu__profile = document.querySelector(".header_menu__profile")
const nav_login = document.querySelector(".nav_login")
const deleteTODO = document.querySelector(".deleteTODO")


const introduceTODO = document.getElementById('introduceTODO')
const templateTask = document.getElementById('taskItemTemplate').content
const taskListContainer = document.querySelector(".taskList__Container")


class Todo {
    constructor(){
        
    }
}
// * FUNCIÓN PARA RECIBIR EL INPUT DEL TODO 

const crearTODO = () => {
    if ((introduceTODO.value).trim().length === 0) {
        return 
    } else {
        addTODOS(templateTask, taskListContainer, introduceTODO)
        resetInputValue(introduceTODO)
    }
}

const addTODO = document.getElementById('addTODO').addEventListener('click', crearTODO)

// * FUNCIÓN AÑADIR TODO

const addTODOS = (template, div, task) => {
    const templateClone = document.importNode(template,true)
    const templateDiv = templateClone.querySelector('div')
    const taskTitle = templateDiv.querySelector('h3')
    taskTitle.textContent = task.value
    div.appendChild(templateDiv)
}

// * BORRAR VALORES DEL INPUT DESPUÉS DE CREAR TODO

const resetInputValue = (task) => {
    task.value = '';
}

// * PULSAR ENTER PARA CREAR TODO

document.addEventListener('keyup', (event) => {
    if (event.keyCode == 13){
        crearTODO()
    } else {
        return
    }
})

document.addEventListener("DOMContentLoaded", ()=>{


    // //* AÑADE EFECTO DE ANIMACIÓN AL MOSTRAR EL LOGIN
    // header_menu__profile.addEventListener("click", ()=>{
    //     nav_login.classList.toggle("showLogin")
    // })


    deleteTODO.addEventListener("click", (e)=> {
        let task = e.target.parentElement.parentElement
        removerTask(task)
    })
})