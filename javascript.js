// $('a[href*="#"]:not([href="#"])').click(function () {
//     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
//         var target = $(this.hash);
//         var id = this.hash.slice(1);
//         target = target.length ? target : $('[name=' + id + ']');
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 1000, function () {
//                 location.hash = id;
//             });
//             return false;
//         }
//     }
// });

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