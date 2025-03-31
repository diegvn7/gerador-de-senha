let sliderElement = window.document.querySelector('#slider')
let buttonElement = window.document.querySelector('#button')

let sizePassword = window.document.querySelector('#valor')
let password = window.document.querySelector('#password')

let conteinerPassword = window.document.querySelector('#container-passwprd')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'
let newPassword = ''

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value
}

function generatePassword() {
    let pass = ''
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random()* n))
    }

    conteinerPassword.classList.remove('hide')
    password.innerHTML = pass
    newPassword = pass
}

function copyPassword() {
    navigator.clipboard.writeText(newPassword)
}
