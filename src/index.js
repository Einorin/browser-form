import "./style.css";
import { validatePattern } from "./validatePattern";




const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
    const emailError = document.querySelector('#emailError')
    const emailErrorMessage = "That is not a valid email"

    const countryInput = document.getElementById('country');
    const countryValue = countryInput.value.trim();
    const countryRegex = /^[A-Z][a-zA-Z\s]*$/;
    const countryError = document.querySelector('#countryError');
    const countryErrorMsg = "The first letter should be capitalize"

    const zipInput = document.getElementById('zip');
    const zipValue = zipInput.value.trim();
    const zipRegex = /\d{4}$/;
    const zipError = document.querySelector('#zipError')
    const zipErrorMessage = "Incorrect ZIP Code"

    const passwordInput = document.querySelector('#password')
    const passwordValue = passwordInput.value.trim();
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const passwordError = document.querySelector('#passwordError')
    const passwordErrorMsg = "Password should be atleast 8 character and have 1 number"

    const passwordInput2 = document.querySelector('#password2')
    const passwordValue2 = passwordInput2.value.trim();
    const passwordRegex2 = /^(?=.*\d).{8,}$/;
    const passwordError2 = document.querySelector('#passwordError2')
    const passwordErrorMsg2 = "Password should be atleast 8 character and have 1 number"
    //parameters input,inputValue,inputPattern,inputError,errorMsg
    validatePattern(emailInput,emailValue,emailRegex,emailError,emailErrorMessage)
    validatePattern(countryInput,countryValue,countryRegex,countryError,countryErrorMsg)
    validatePattern(zipInput,zipValue,zipRegex,zipError,zipErrorMessage)
    validatePattern(passwordInput,passwordValue,passwordRegex,passwordError,passwordErrorMsg)
    validatePattern(passwordInput2,passwordValue2,passwordRegex2,passwordError2,passwordErrorMsg2)

    if(passwordValue !== passwordValue2){
        passwordError2.textContent = "Password does not match"
    }else{
        passwordError2.textContent = "";
    }
})
