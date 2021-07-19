/* незадействованый */

// выбираем два списка с класом "sorting"
var sortUl = document.querySelectorAll(".sorting");

// проходи по спискам функцией forEach
sortUl.forEach(function (item) {

  // вешаем события клика на список
  item.addEventListener("click",function (e){

    // отменяем действия по умолчанию
    e.preventDefault();

    // находим элемент который вызвал события
    var itemTarget = e.target;

    // проверяем является ли элемент ссылкой
    if(itemTarget.tagName === "A"){

      // находим все ссылки с класом "sorting__link"
      var sortLink = document.querySelectorAll(".sorting__link");

      // пробегаемся по ним функцией forEach
      sortLink.forEach(function (sortItem){

        // если у сслыки есть класс sorting__link--active и tabindex удаляем
        if(sortItem.classList.contains("sorting__link--active")){
          sortItem.classList.remove("sorting__link--active");
          sortItem.removeAttribute("tabindex");
        }

      });

      // элементу который вызвал события добавляем класс "sorting__link--active" и "tabindex"
      itemTarget.classList.add("sorting__link--active");
      itemTarget.setAttribute("tabindex", "-1");
    }

  },true);

});
