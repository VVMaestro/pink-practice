window.addEventListener("load", function() {
    var navSwitch = document.querySelector(".main-nav__switch");
    var pageHeader = document.querySelector(".page-header");
    var commentsToggles = document.querySelectorAll(".comments__toggle-js");
    var commentsList = document.querySelector(".comments__list");
    var prevButton = document.querySelector(".comments__prev");
    var nextButton = document.querySelector(".comments__next");
    var appPriceTable = document.querySelector(".app-price__table");
    var appPriceToggles = document.querySelectorAll(".app-price__toggle-js");

    //функция для настройки событий для комментариев
    function setCommentsToggles(indexI) {
        commentsToggles[indexI].addEventListener("click", function () {
            for (j = 0; j < commentsToggles.length; j++) {
                commentsList.classList.remove(`comments__list--${j + 1}-comment`);
                commentsToggles[j].classList.remove("toggle--current");
            }
            commentsList.classList.add(`comments__list--${indexI + 1}-comment`);
            commentsToggles[indexI].classList.add("toggle--current");
        });
    };
    //функция для настройки событий для цтаблицы цен
    function setAppPriceToggles(indexI) {
        appPriceToggles[indexI].addEventListener("click", function () {
            for (j = 0; j < commentsToggles.length; j++) {
                appPriceTable.classList.remove(`app-price__table--${j + 1}-column`);
                appPriceToggles[j].classList.remove("toggle--current");
            }
            appPriceTable.classList.add(`app-price__table--${indexI + 1}-column`);
            appPriceToggles[indexI].classList.add("toggle--current");
        });
    };
    //функция для нахождения текущего коментария
    function findCommentNumber () {      
        for (var i = 0; i < commentsToggles.length; i++) {
            if (commentsToggles[i].classList.contains("toggle--current")) {
                var currentComment = i + 1;
            }
        }
        return currentComment;
    }
    //вешает обработчик событий на переключатель навигации
    navSwitch.addEventListener("click", function() {
        if (pageHeader.classList.contains("main-nav--closed")) {
            pageHeader.classList.remove("main-nav--closed");
            pageHeader.classList.add("main-nav--opened");
        } else {
            pageHeader.classList.remove("main-nav--opened");
            pageHeader.classList.add("main-nav--closed");
        }
    });
    //вешает обработчики на кнопки комментарий
    for (var i = 0; i < commentsToggles.length; i++) {            
        setCommentsToggles(i);
    }
    //вешает обработчики на стрелки комментариев
    prevButton.addEventListener("click", function() {
        //Находит номер текущего комментария
        var currentComment = findCommentNumber();
        var indexOfcurrentToggle = currentComment - 1;

        if (currentComment > 1) {
        //Удаляет стили для текущего комментария и кнопки
        commentsList.classList.remove(`comments__list--${currentComment}-comment`);
        commentsToggles[indexOfcurrentToggle].classList.remove("toggle--current");
        //Добавляет стили для предыдущего комментария и кнопки
        commentsList.classList.add(`comments__list--${--currentComment}-comment`);
        commentsToggles[--indexOfcurrentToggle].classList.add("toggle--current");
        }
    });

    nextButton.addEventListener("click", function () {
        //Находит номер текущего комментария
        var currentComment = findCommentNumber();
        var indexOfcurrentToggle = currentComment - 1;

        if (currentComment < 3) {
            //Удаляет стили для текущего комментария и кнопки
            commentsList.classList.remove(`comments__list--${currentComment}-comment`);
            commentsToggles[indexOfcurrentToggle].classList.remove("toggle--current");
            //Добавляет стили для предыдущего комментария и кнопки
            commentsList.classList.add(`comments__list--${++currentComment}-comment`);
            commentsToggles[++indexOfcurrentToggle].classList.add("toggle--current");
        }
    });
    //вешает обработчики на кнопки таблицы цен
    for(var i = 0; i < appPriceToggles.length; i++) {
        setAppPriceToggles(i);
    }
});