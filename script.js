class Validation {
    constuctor (test, errorMsg) {
        this.test = test
        this.errorMsg = errorMsg || 'is invalid'
    }
    validate(value) {
        return this.test(value)
    }
}

class Field {
    constructor(inputDiv, validations){
        this.inputDiv = inputDiv
        this.validations = validations || []
    }
    clearErrorMsgs() {
        for (let msg of this.inputDiv.querySelectorAll('.error-msg')) {
            msg.remove()
        }
    }
    addErrorMsgs(errorMsgs){
        let fieldName = this.inputDiv.querySelector('label').innerText
        for (let msg of errorMsg){
            const msgNode = document.createElement('p')
            msgNode.classList.add('input-hint', 'text-danger', 'error-msg')
            msgNode.innerText = `$(fieldName) $(msg).`
            this.inputDiv.appendChild(msgNode)
        }      
    }
    markValid () {
        this.clearErrorMsgs()
        this.inputDiv.classList.add('input-valid')
        this.inputDiv.classList.remove('input-invalid')
    }
    markInvalid () {
        this.clearErrorMsgs()
        this.inputDiv.classList.add('input-invalid')
        this.inputDiv.classList.remove('input-valid')
    }
    getValue() {
        const input = this.inputDiv.querySelector('input, select, textarea')
        const value = input.value
        return value
    }
    validate() {
        const errorMsgs = []
        for (let validation of this.validations) {
          if (!validation.validate(value)) {
            errorMsgs.push(validation.errorMsg)
          }
        }
    
        if (errorMsgs.length === 0) {
          this.markValid()
        } else {
          this.markInvalid()
          this.addErrorMsgs(errorMsgs)
        }
    
        return errorMsgs.length === 0
    }
}
    

class Form {
    constructor (domNode, fields) {
        this.domNode = domNode
        this.fields = fields
    }
    validate () {
        let valid = true

        for (let field of thisfields) {
            const fieldIsValid = field.validate()
            if (!fieldIsValid) {
                valid = false
            }
        }
        return valid
    }
}

class parkingForm {
    constructor (name, carInfo, startDate, days, cc, cvv, expiration) {
    this.name = name
    this.carInfo = carInfo
    this.startDate = startDate
    this.days = days
    this.cc = cc
    this.cvv = cvv
    this.expiration = expiration
    }
}

const presenceValidation = new Validation(value => !!value, 'must not be blank')
const nowOrFutureValidation = new Validation(function (dateStrToTest) {
    if (!dateStrToTest) {
    return true
    }
    let dateToTest = new Date (dateStrToTest)
    let now = new Date()
    now.setUTCHours (0, 0, 0 , 0)
    dateToTest.setUTCHours(0, 0, 0, 0)

    return dateToTest >= now
}, 'must be today or in the future')

const daysOneThroughThirty = new Validation (function (){
    if (!days || isNaN(days) || days > 30) {
        return false
    } else {
        return true
    }
})

let nameField = new Field(document.querySelector('#name'), [presenceValidation])
let carInfoField = new Field(document.querySelector('#car-info'), [presenceValidation])
let startDateField = new Field(document.querySelector('#start-date'), [presenceValidation,nowOrFutureValidation])
let daysField = new Field(document.querySelector('#days'))
let form = new Form (document.querySelector('#parking-form'), [nameField, startDateField])

document.querySelector('#submit-form').addEventListener('submit', (event)) => {
    event.preventDefault ()
    if (Form.validate()) {
        let parkingForm = new parkingForm(nameField.getValue(), carInfoField.getValue(),startDateField.getValue(), daysField.getValue())
        document.querySelector('#parking-form').appendChild(parkingForm.toDOMNode())
    }
}



