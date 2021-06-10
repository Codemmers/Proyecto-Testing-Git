class AdderTask{
    constructor(){
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
}


