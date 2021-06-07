

export const removerTask = (task) => {
    task.classList.add("classAnimationDelete")
    task.addEventListener("animationend", () => task.remove())
}