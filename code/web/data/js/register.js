let passwordConfirmationElement = document.querySelector('#passwordConfirmation');
let passwordElement = document.querySelector('#password');
let btnSubmit = document.querySelector("button");

btnSubmit.disabled = true;

passwordConfirmationElement.addEventListener('keyup', () => {
    div = document.querySelector('#errorJs');
    if (passwordConfirmationElement.value != passwordElement.value || passwordConfirmationElement.value === "") {
        div.textContent = "mots de passes differents"
        btnSubmit.disabled = true;
    }else {
        div.textContent = ""
        btnSubmit.disabled = false;
    }
})