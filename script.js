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
    isDays(){
        return this.input >= 1 && this.input <30; 
    }
    isCvv() {
        return this.input.length === 3;   
    }
    isCarYear () {
        return this.input >= 1900 && this.input <2019;
    }
}

q('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()

let nameValue = q("#name").value

let nameField= new Field (nameValue)

let carYearValue = q("#car-year").value

let carYearField = new Field (carYearValue)

let daysValue= q("#days").value

let daysField = new Field (daysValue)

let cvvValue = q("#cvv").value

let cvvField= new Field (cvvValue)


nameField.validateField()

console.log(carField.validateField())

carYearField.validateField()

carYearField.isNumber()

carYearField.isCarYear()

daysField.validateField()

daysField.isNumber()

daysField.isDays()

cvvField.validateField()

cvvField.isNumber()

cvvField.isCvv()

})




