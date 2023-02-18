
// In this section we toggle class active and make a nav menu appear in Mobile layouts
const toggleButton = document.getElementById("toggle-button")
const navBar = document.getElementsByClassName("nav-links")[0]

toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("active")
})