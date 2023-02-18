const toggleButton = document.getElementById("toggle-button")
const navBar = document.getElementsByClassName("nav-links")[0]

toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("active")
})