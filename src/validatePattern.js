// const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;

export function validatePattern(input,inputValue,inputPattern,inputError,errorMsg){

    if (!inputValue){
        inputError.textContent = "This field can't be empty";
        input.classList.add('error')
    }else if(!inputPattern.test(inputValue)){
        inputError.textContent = "Invalid format"
        input.classList.add('error');
    }else{
        inputError.textContent = "";
        inputError.classList.remove('error');
    }
}