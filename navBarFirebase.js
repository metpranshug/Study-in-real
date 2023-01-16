const userlink = document.getElementById("userlink")
const userlink1 = document.getElementById("userlink1")
const signoutlink = document.getElementById("signoutlink")
const header = document.getElementById("hh")
var currentUser = null




function signOut() {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    localStorage.removeItem('keepLoggingIn')
    window.location = "index.html"
    // window.location = ""
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
        userlink.innerText = "Get Started"
        userlink.classList.replace("nav-link", "btn")
        userlink.classList.add("btn-primary")
        userlink.href = "signUpPage.html"

        signoutlink.innerText = "Login"
        signoutlink.classList.replace("nav-link", "btn")
        signoutlink.classList.add("btn-success")
        signoutlink.href = "loginPage.html"
        
        userlink1.innerText = "Get Started"
        userlink1.classList.replace("nav-link", "btn")
        userlink1.classList.add("btn-primary")
        userlink1.href = "signUpPage.html"

    }
    else {
        userlink.innerText = "Welcome"
        userlink.classList.replace("nav-link", "btn")
        userlink.classList.add("btn-primary")
        userlink.href = "#"

        signoutlink.innerText = "Sign Out"
        signoutlink.classList.replace("nav-link", "btn")
        signoutlink.classList.add("btn-success")
        signoutlink.href = "javascript:signOut()"

        userlink1.innerText = "Explore Now"
        userlink1.classList.replace("nav-link", "btn")
        userlink1.classList.add("btn-primary")
        userlink1.href = "LandingPage.html"

    }
}