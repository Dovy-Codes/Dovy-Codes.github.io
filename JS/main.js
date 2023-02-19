
// In this section we toggle class active and make a nav menu appear in Mobile layouts
const toggleButton = document.getElementById("toggle-button");
const navBar = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("active")
})

// const welcome = ["Hello!", "¡Hola!", "Привет!", "Labas!"];
// let i = 0;
// setInterval(Hello, 2000);
// function Hello() {
//     if(i >= welcome.length-1) {
//         i = 0;
//     } else { i++; }
//     document.getElementById("hi").innerHTML = welcome[i];
//     // document.getElementById("hi").innerHTML = welcome[i];
// }   

