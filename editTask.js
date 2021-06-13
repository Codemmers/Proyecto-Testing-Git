

const editTask = (taskTitle) => {
    taskTitle.contentEditable = 'true'
    taskTitle.focus()
    document.addEventListener('keyup', (event) => {
        if (event.keyCode == 13){
            taskTitle.contentEditable = 'false'
            taskTitle.toString().replace('<br>','')
        }
    })
}

export default editTask