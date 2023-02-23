
// In this section we toggle class active and make a nav menu appear in Mobile layouts
const toggleButton = document.getElementById("toggle-button");
const navBar = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("active")
})

document.getElementById("close").addEventListener("click", closeForm);
function closeForm(){
    $(".modal").fadeOut()
    document.body.removeAttribute("style", "height: 100%; overflow-y: hidden;");
}
document.getElementById("openForm").addEventListener("click", openForm);
document.getElementById("openForm2").addEventListener("click", openForm);
document.getElementById("openForm3").addEventListener("click", openForm);
function openForm(){
    $(".modal").fadeIn();
    //Here I close Navbar on Mobile
    if(navBar.classList.contains("active")){
        navBar.classList.toggle("active");
    }
    document.body.setAttribute("style", "height: 100%; overflow-y: hidden;");
}