const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = []

function addItem(e) {
    e.preventDefault()
    const text = (this.querySelector('[name=item]')).value   //using the'this' keyword specifies the form to be selected
    const item = {
        text,
        done: false
    }
    items.push(item)
    populateList(item, itemsList)
    this.reset()  //clears the input area
}

function populateList(plates=[], placeList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <label for="">${plate.text}</label>
        </li>
        ` 
    }).join('')
}

addItems.addEventListener('submit', addItem)