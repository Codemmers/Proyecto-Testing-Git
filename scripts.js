

import {removerTask} from "./removerTask.js"

const header_menu__profile = document.querySelector(".header_menu__profile")
const nav_login = document.querySelector(".nav_login")

const deleteTODO = document.querySelector(".deleteTODO")

document.addEventListener("DOMContentLoaded", ()=>{


    //* AÑADE EFECTO DE ANIMACIÓN AL MOSTRAR EL LOGIN
    header_menu__profile.addEventListener("click", ()=>{
        nav_login.classList.toggle("showLogin")
    })


    deleteTODO.addEventListener("click", (e)=> {
        let task = e.target.parentElement.parentElement
        removerTask(task)
    })
})