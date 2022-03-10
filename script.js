const inputName = document.querySelector('.input_name')
const inputLastName = document.querySelector('.input_lastName')
const inputEmail = document.querySelector('.input_email')
const inputPassword = document.querySelector('.input_password')
const submitButton = document.querySelector('.button_submit')

const validationError1 = document.querySelector('.validation-error_1')
const validationError2 = document.querySelector('.validation-error_2')
const validationError3 = document.querySelector('.validation-error_3')
const validationError4 = document.querySelector('.validation-error_4')

const errorIcon1 = document.querySelector('.error_icon_1')
const errorIcon2 = document.querySelector('.error_icon_2')
const errorIcon3 = document.querySelector('.error_icon_3')
const errorIcon4 = document.querySelector('.error_icon_4')

function validateEmail(email) 
{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

submitButton.addEventListener('click', ()=>{
    if (inputName.value == ''){
        validationError1.classList.add('visible')
        errorIcon1.classList.add('visible') 
    }
    else{
        validationError1.classList.remove('visible')
        errorIcon1.classList.remove('visible') 
    }

    if (inputLastName.value == ''){
        validationError2.classList.add('visible')
        errorIcon2.classList.add('visible') 
    }
    else{
        validationError2.classList.remove('visible')
        errorIcon2.classList.remove('visible') 
    }

    if (inputPassword.value == ''){
        validationError4.classList.add('visible')
        errorIcon4.classList.add('visible') 
    }
    else{
        validationError4.classList.remove('visible')
        errorIcon4.classList.remove('visible') 
    }

    if (validateEmail(inputEmail.value)){
        validationError3.classList.remove('visible')
        errorIcon3.classList.remove('visible') 
    }
    else{
        validationError3.classList.add('visible')
        errorIcon3.classList.add('visible') 
    }
  })
