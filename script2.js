function q (selector){
    return document.querySelector(selector)
}

function qs(selector){
    return document.querySelectorAll(selector)
}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;

}

class Form {
    constructor (){}
}

class Field {
    constructor(input, id) {
        this.input = input;
        this.node = document.querySelector(`{id}`)
    }
    validateField() {
        //Call the validator for that type of field
    }
} 
let nameField = new Field ("", "#name")

class Validate {
    constructor(test, msg){
        this.test = test
        this.msg = msg
    }    
}

let nameValidation = new Validation (function (input){
    return !input === ""}, "Name Required")
    
if (!nameValidation.test(nameField.input)){
    return nameValidation.msg
}

// validateField() {
//     return newFunction();
// }
    // isNumber() {
    //     return !isNaN(this.input)
    // }
    // isDays(){
    //     return this.input >= 1 && this.input <30; 
    // }
    // isCvv() {
    //     return this.input.length === 3;   
    // }
    // isCarYear () {
    //     return this.input >= 1900 && this.input <2019;
    // }


q('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()

let nameValue = q("#name").value

let nameField= new Field (nameValue)

let carYearValue = q("#car-info").value

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




function newFunction() {
    return this.input !== "";
}

