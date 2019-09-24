function q (selector){
    return document.querySelector(selector)
}

function qs(selector){
    return document.querySelectorAll(selector)
}


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
    isCvv() {
    return this.input.length === 3;   
    }
}

q('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()

let nameValue = q("#name").value

let nameField= new Field (nameValue)

let daysValue= q("#days").value

let daysField = new Field (daysValue)

let cvvValue = q("#cvv").value

let cvvField= new Field (cvvValue)

nameField.validateField()

daysField.validateField()

daysField.isNumber()

console.log(cvvField.validateField())

console.log(cvvField.isNumber())

console.log(cvvField.isCvv())

})




