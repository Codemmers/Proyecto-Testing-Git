let templateTask = document.getElementById('taskItemTemplate').content
const introduceTODO = document.getElementById('introduceTODO')
const addTODO = document.getElementById('addTODO')
let taskListContainer = document.querySelector('.taskList__Container')

const crearTODO = () => {
        const addTODOS = (template, div, task) => {
            const templateClone = document.importNode(template,true)
            const templateDiv = templateClone.querySelector('div')
            const taskTitle = templateDiv.querySelector('h3')
            const deleteButtons = templateDiv.querySelector('div').querySelector('deleteTODO')
            console.log(deleteButtons)
            taskTitle.textContent = task.value
            div.appendChild(templateDiv)
        }



        const resetInputValue = (task) => {
            task.value = ''
        }

        if ((introduceTODO.value).trim().length === 0) {
            return 
        } else {
            addTODOS(templateTask, taskListContainer, introduceTODO)
            resetInputValue(introduceTODO)

        }
    }    

export {crearTODO}
export {templateTask}
export {introduceTODO}
export {addTODO}
export {taskListContainer}