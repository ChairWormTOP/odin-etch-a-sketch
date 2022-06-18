let dimension = 0

const flex = document.querySelector('.flex')

let container = document.querySelector('.container')

const drawGrid = (dimension) => {
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            const div = document.createElement('div')
            div.classList.toggle('box')
            div.style.border = '1px solid black'
            div.style.padding = '20px'

            container.appendChild(div)
        }
    }
}

const setGridTemplate = (size) => {
    const percentage = 100 / size
    return `${percentage}% `.repeat(size)
}

const btnChangeSize = document.querySelector('#button')
btnChangeSize.addEventListener('click', () => {
    flex.removeChild(container)

    dimension = parseInt(prompt("Change size: (limit 100)"))
    
    container = document.createElement('div')
    flex.appendChild(container)
    container.classList.toggle('container')
    container.style.display = 'inline-grid'
    // container.style.gap = '1px'
    container.style.gridTemplateColumns = setGridTemplate(dimension)
    container.style.gridTemplateRows = setGridTemplate(dimension)
    drawGrid(dimension)
})