const userlink = document.getElementById("userlink")
const signoutlink = document.getElementById("signoutlink")
const header = document.getElementById("hh")
var currentUser = null



function signOut() {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    localStorage.removeItem('keepLoggingIn')
    window.location = "index.html"
}

function getUserName() {
    const keepLoggingIn = localStorage.getItem("keepLoggingIn")

    if (keepLoggingIn == 'yes') {
        currentUser = localStorage.getItem('user')
    } else {
        currentUser = sessionStorage.getItem('user')
    }
}

window.onload = function () {
    getUserName()

    if (currentUser == null) {
        userlink.innerText = "Gets Started"
        userlink.classList.replace("nav-link", "btn")
        userlink.classList.add("btn-primary")
        userlink.href = "signUpPage.html"

        signoutlink.innerText = "Login"
        signoutlink.classList.replace("nav-link", "btn")
        signoutlink.classList.add("btn-success")
        signoutlink.href = "loginPage.html"
    }
    else {
        userlink.innerText = "welcome"
        // header.innerText = "welcome "
        userlink.classList.replace("nav-link", "btn")
        userlink.classList.add("btn-primary")
        userlink.href = "#"

        signoutlink.innerText = "sign-out"
        signoutlink.classList.replace("nav-link", "btn")
        signoutlink.classList.add("btn-success")
        signoutlink.href = "javascript:signOut()"
    }
}