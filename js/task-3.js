const inputField = document.querySelector("input#name-input");
const fieldOutput = document.querySelector("span#name-output");

const inputHandler = input => {
    if (input.currentTarget.value.trim()) {
        fieldOutput.textContent = input.currentTarget.value.trim();
    } else { fieldOutput.textContent = "Anonymous" };
    
} 
inputField.addEventListener("input", inputHandler);

// TODO: add styles on active and hover