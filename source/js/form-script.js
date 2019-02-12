window.addEventListener("load", function () {
    var navSwitch = document.querySelector(".main-nav__switch");
    var pageHeader = document.querySelector(".page-header");
    
    //вешает обработчик событий на переключатель навигации
    navSwitch.addEventListener("click", function () {
        if (pageHeader.classList.contains("main-nav--closed")) {
            pageHeader.classList.remove("main-nav--closed");
            pageHeader.classList.add("main-nav--opened");
        } else {
            pageHeader.classList.remove("main-nav--opened");
            pageHeader.classList.add("main-nav--closed");
        }
    });
});