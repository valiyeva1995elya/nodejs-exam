const btn = document.querySelector(".btn");


const BASE_URL = "http://localhost:3000";

const fetchData = async (route) => {
    const response = await fetch(BASE_URL + route);
    return await response.json();
};



btn.addEventListener("click",  () => {
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let payload = []

    fetch(BASE_URL + "/accounts").then(res => res.json())
   
        .then(accounts => JSON.parse(accounts))
        .catch(() => alert("err"));
    

    console.log(accounts);
    for (let i = 0; i <= payload.length - 1; i++) {
        if (!validateEmail(email)) {
            alert("Incorrect email!")
            break
        } else if (email == payload[i].email && password == payload[i].password) {
            localStorage.setItem('user', JSON.stringify(payload[i]))

            document.location.href = "./homePage.html"
        }
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