"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};
/* код определяет на каком устройстве открыта страница*/

// Меню бургер
const menuBurger = document.querySelector('.menu__burger');

if (menuBurger) {
    const menuBody = document.querySelector('.menu__body');
    menuBurger.addEventListener("click", function (e) {
        menuBurger.classList.toggle('_active');
    });
}