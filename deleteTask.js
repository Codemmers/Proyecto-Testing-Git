

const deleteTODOS = (deleteButtons) => {
    const deleteContainer =  deleteButtons.parentElement.parentElement
    deleteContainer.classList.add("deleteTODOAnimation")
    deleteContainer.addEventListener("animationend", () => deleteContainer.remove())
}

export default deleteTODOS