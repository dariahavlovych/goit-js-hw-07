const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleFormSabmit);

function handleFormSabmit  (event) { 
    event.preventDefault();

    const formValues = {
        email: event.currentTarget.elements.email.value.trim(),
        password: event.currentTarget.elements.password.value.trim()
    } 
    if (formValues.email && formValues.password) {
        console.log(formValues);
    } else { alert("All form fields must be filled in"); }


    event.currentTarget.reset();
}
