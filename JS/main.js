
// In this section we toggle class active and make a nav menu appear in Mobile layouts
const toggleButton = document.getElementById("toggle-button");
const navBar = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("active")
})

document.getElementById("close").addEventListener("click", closeForm);
function closeForm(){
    $(".modal").fadeOut()
    //This takes of styles off body that stopped it from scrolling
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
    //This makes sure that you can't scroll when the contact form is open
    document.body.setAttribute("style", "height: 100%; overflow-y: hidden;");
}


//This part changes the size of project items on hover but only on screens widder then 1210px
const travel = document.getElementById("travel-website");
const todo = document.getElementById("todo-app");
const git = document.getElementById("github");
const thisWeb = document.getElementById("this-website");
todo.addEventListener("mouseover", changeWidthTop)
todo.addEventListener("mouseout", changeWidthTop);
function changeWidthTop(){
    if ($(document).width() > 1210){
        if(todo.getAttribute("style") == "width: 65%;"){
            todo.setAttribute("style", "width: 30%;");
            travel.setAttribute("style", "width: 65%;");
        }
        else{
        todo.setAttribute("style", "width: 65%;");
        travel.setAttribute("style", "width: 30%;");
        }
    }
}
git.addEventListener("mouseover", changeWidth)
git.addEventListener("mouseout", changeWidth);
function changeWidth(){
    if ($(document).width() > 1210){
        if(git.getAttribute("style") == "width: 65%;"){
            git.setAttribute("style", "width: 30%;");
            thisWeb.setAttribute("style", "width: 65%;");
        }
        else{
        git.setAttribute("style", "width: 65%;");
        thisWeb.setAttribute("style", "width: 30%;");
        }
    }
}

//This code will fade in elements 
const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target)
            } 
            // else {
            //     entry.target.classList.remove("show");
            // }
        });
    },
    {
        
        threshold: .10,
    }
);
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
            observer2.unobserve(entry.target)
        } 
        // else {
        //     entry.target.classList.remove("show");
        // }
    });
},
{
    
    threshold: .50,
}
);
const hiddenElementsWT = document.querySelectorAll('.hiddenWT');
hiddenElementsWT.forEach((el) => observer2.observe(el));

//Didn't use this feature in the end but keeping it here for now, it changes text every 2.5s
/* 
(function () {
    let welcome = ["Hi!", "¡Hola!", "Привет!", "Labas!"],
    i = 0
    setInterval(function(){
        $("#hi").fadeOut(function(){
            $(this).html(welcome[(i =(i + 1) % welcome.length)]).fadeIn();
        });
    }, 2500)
}) ();
*/