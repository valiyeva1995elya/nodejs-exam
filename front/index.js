const btn = document.querySelector(".btn");
const { AccountModel } = require("../Models");

const BASE_URL = "http://localhost:3000";

function singIn() {
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value
    
    for (let i = 0; i <= AccountModel.length - 1; i++) {
        if (!validateEmail(email)) {
            alert("Incorrect email!")
            break
        } else if (email == AccountModel[i].email && password == AccountModel[i].password) {
            localStorage.setItem('saveUser', JSON.stringify(arrCheckUser[i]))
            if (check.checked == true) {
                let a = { checkbox: "true" }
                let saveUserCheck = JSON.parse(localStorage.getItem('saveUser'))
                saveUserCheck = { ...saveUserCheck, ...a };
                localStorage.setItem('saveUser', JSON.stringify(saveUserCheck))
                document.location.href = './3.html'
            } else
            localStorage.setItem('saveUser', JSON.stringify(arrCheckUser[i]))
            document.location.href = './3.html'
        }
    }
}

btn.addEventListener("click", () => {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    const payload = {
        email: email,
        password: password,
        name: name,
        surname: surname,
        age: age,

    };
    if (checkDate(payload)) {
        fetch(BASE_URL + "/accounts", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "post",
            body: JSON.stringify(payload)
        })
            .then(() => window.location.href = "./index.html")
            .catch(() => alert("err"));
    }else{ 
        console.log("err"); 
    }
});
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validatePassword = (password) => {
    return String(password)
        .match(
            /^\S*(?=.*[A-Z])(?=.*[0-9])(?=.*[/$!*])[a-zA-Z0-9*/$!]{8,}\S*$/g
        );
};