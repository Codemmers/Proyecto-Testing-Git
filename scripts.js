



import {removerTask} from "./removerTask.js";

const header_menu__profile = document.querySelector(".header_menu__profile")
const nav_login = document.querySelector(".nav_login")
const deleteTODO = document.querySelector(".deleteTODO")


const introduceTODO = document.getElementById('introduceTODO')
const templateTask = document.getElementById('taskItemTemplate').content
const taskListContainer = document.querySelector(".taskList__Container")

<<<<<<< HEAD
=======

>>>>>>> fe3b6228ca14d13402d06d3be3f000fe09e6cde9
const addTODO = document.getElementById('addTODO').addEventListener('click', () => {
    if ((introduceTODO.value).trim().length === 0) {
        return 
    } else {
        addTODOS(templateTask, taskListContainer, introduceTODO)
    }
})


// * FUNCIÓN AÑADIR TODO

const addTODOS = (template, div, task) => {
    const templateClone = document.importNode(template,true)
    const templateDiv = templateClone.querySelector('div')
    const taskTitle = templateDiv.querySelector('h3')
    taskTitle.textContent = task.value
    div.appendChild(templateDiv)
}


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