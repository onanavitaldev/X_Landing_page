/* Hide or delete load space */
setTimeout(() => {
    document.querySelector('.load').style.display = "none";
}, 2000);

var menu = document.getElementById('navbar-sticky');
var btn = document.getElementById("openMenu");

btn.addEventListener("click", function(){
    menu.style.display = "block";
    setTimeout(() => {
        menu.style.display = "none";
    }, 2000);
});