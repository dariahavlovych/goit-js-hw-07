const inputField = document.querySelector("input#name-input");
const fieldOutput = document.querySelector("span#name-output");

const inputHandler = event => {
    if (event.currentTarget.value.trim()) {
        fieldOutput.textContent = event.currentTarget.value.trim();
    } else { fieldOutput.textContent = "Anonymous" };
    
} 
inputField.addEventListener("input", inputHandler);

// TODO: add styles on active and hover