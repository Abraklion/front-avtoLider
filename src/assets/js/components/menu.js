/* ============ Переменные =============*/
const burger = document.querySelector(".js-burger");
const close = document.querySelector(".js-close");
const navigation = document.querySelector("#navigation");
const allInteractive = document.querySelectorAll("a:not(.navigation__menu-link),button:not(.js-close),iframe,input,textarea");

/* ============ События =============*/

// Мыши
burger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);

// Клавиатуры
window.addEventListener("keydown", function (evt){

  if(evt.keyCode === 27 || evt.code === "Escape") {
    if(navigation.classList.contains("navigation--show")){
      evt.preventDefault();

      hideMenu();
    }
  }
});

/* ============= Функции ==============*/

// Показать меню
function showMenu() {
  navigation.classList.remove("navigation--hide");
  navigation.classList.add("navigation--show");

  setTimeout(function (){
    navigation.classList.add("show");
    navigation.classList.remove("hide");
  }, 100);

  offInteractive();

  if(window.outerWidth > 991){
    close.focus();
  }

}

// Скрыть меню
function hideMenu() {
  navigation.classList.add("hide");
  navigation.classList.remove("show");

  setTimeout(function (){
    navigation.classList.remove("navigation--show", "hide");
    navigation.classList.add("navigation--hide", "hide");
  }, 600);

  onInteractive();

  if(window.outerWidth > 991){
    burger.focus();
  }

}

// Убираем интерактивные элементы, кроме элементов меню
function offInteractive(){
  allInteractive.forEach(function (item){
    item.setAttribute("tabindex","-1");
  });
}

// Возвращаем интерактивные элементы
function onInteractive(){
  allInteractive.forEach(function (item){
    item.removeAttribute("tabindex");
  });
}
