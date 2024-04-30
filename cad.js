
var usernameInput = document.getElementsByClassName("js1")[0]; 
var passwordInput = document.getElementsByClassName("js2")[0]; 

var error = document.getElementById("h3");
var form = document.getElementById("form");


const validate = () => {
    const username = usernameInput.value;

    if (username.length === 0) {
        error.innerHTML = "Incorrect username or password. Please try again";
        usernameInput.classList.add("error1")
        passwordInput.classList.add("error1")
        return false; 
    } else {
        error.innerHTML = ""; 
        return true; 
    }
};


form.addEventListener("submit", (e) => {
    const isValid = validate();

    if (!isValid) {
        e.preventDefault();
    }
});
