(function(){

    const openMenuButton = document.querySelector("#open-menu-button");
    const navigationLinks = document.querySelectorAll(".header__link")
    
    setup();

    function setup(){
        openMenuButton.addEventListener("click", manageMenu);
        navigationLinks.forEach((link)=>{
            link.addEventListener("click", closeMenu);
        });
    }
    function closeMenu() {
        openMenuButton.setAttribute('aria-expanded', 'false');
    }
    function openMenu() {
        openMenuButton.setAttribute('aria-expanded', 'true');
    }
    function manageMenu(){
        if(openMenuButton.getAttribute('aria-expanded') === 'true'){
            closeMenu();
        }else{
            openMenu();
        }
    }
}());
