function q (selector){
    return document.querySelector(selector)
}

function qs(selector){
    return document.querySelectorAll(selector)
}

let field = q('#field')
let input = q('#input')

class Field {
    constructor(input) {
        this.input = input;
    }
    validateField() {
    return this.input !== "";
    }
    isNumber() {
    return !isNaN(this.input)
    }
}

q('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()

let nameValue = q("#name").value

let nameField= new Field (nameValue)

let daysValue= q("#days").value

let daysField = new Field (daysValue)

nameField.validateField()

console.log(daysField.validateField())
console.log(daysField.isNumber())

})




