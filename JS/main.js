
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

    //Didn't use this feature in the end but keeping it for now it changes text every 2.5s
    /* 
    <script type="text/javascript">
    (function () {
        let welcome = ["Hi!", "¡Hola!", "Привет!", "Labas!"],
        i = 0
        setInterval(function(){
            $("#hi").fadeOut(function(){
                $(this).html(welcome[(i =(i + 1) % welcome.length)]).fadeIn();
            });
        }, 2500)
    }) ();
    </script>
    */