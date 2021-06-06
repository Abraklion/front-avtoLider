/* Переменные */
const burger = document.querySelector(".js-burger");
const close = document.querySelector(".js-close");
const navigation = document.querySelector("#navigation");

/* События */
burger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);

/* Функции */
function showMenu() {
  navigation.classList.remove("navigation--hide");
  navigation.classList.add("navigation--show");

  setTimeout(function (){
    navigation.classList.add("show");
    navigation.classList.remove("hide");
  }, 100);

  close.focus();
}

function hideMenu() {
  navigation.classList.add("hide");
  navigation.classList.remove("show");

  setTimeout(function (){
    navigation.classList.remove("navigation--show", "hide");
    navigation.classList.add("navigation--hide", "hide");
  }, 600);

  burger.focus();
}
