// window.alert()
const dropdown=document.querySelector(".dropdown")
const dropdown_menu=document.querySelector(".dropdown-menu")
const catlink=document.querySelector(".cat-link")




dropdown.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the <a> tag
});
dropdown.addEventListener("click", ()=>{
    if (dropdown_menu.style.display=="none"){
        dropdown_menu.style.display="flex"
    }
    else{
        dropdown_menu.style.display="none"

    }
})

