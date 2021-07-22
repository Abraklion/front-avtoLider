/*  Обработка и отправка формы главной страницы асинхронно  */

var forms = document.querySelectorAll(".form");

forms.forEach(function (item) {

  item.addEventListener("submit",function (e){

    //отменяем действия по умолчанию
    e.preventDefault();

    // получаем элементы формы
    var phoneA = this.querySelector("[name=phone]");
    var vinA = this.querySelector("[name=vin]");
    var sparesA = this.querySelector("[name=spares]");

    //проверяем проходят ли элементы валидацию
    if((!phoneA.value || phoneA.value.length !== 17) || (!vinA.value || vinA.value.length < 5 || vinA.value.length > 17) ||  (!sparesA.value || sparesA.value.length < 5 || sparesA.value.length > 1000)){

      if(phoneA.classList.contains("form__input--invalid")){
        phoneA.classList.remove("form__input--invalid");
      }

      if(vinA.classList.contains("form__input--invalid")){
        vinA.classList.remove("form__input--invalid");
      }

      if(sparesA.classList.contains("form__textarea--invalid")){
        sparesA.classList.remove("form__textarea--invalid");
      }

      if(!phoneA.value || phoneA.value.length < 17){
        phoneA.classList.add("form__input--invalid");
      }

      if(!vinA.value || vinA.value.length < 5 || vinA.value.length > 17){
        vinA.classList.add("form__input--invalid");
      }

      if(!sparesA.value || sparesA.value.length < 5 || sparesA.value.length > 1000){
        sparesA.classList.add("form__textarea--invalid");
      }
    }
    // если все элемента проходят валидацию
    else {

      //формируем строку параметров
      var str = "phone=" + phoneA.value + "&vin=" + vinA.value + "&spares=" + sparesA.value;

      // создаем экземпляр класса "XMLHttpRequest"
      var request = new XMLHttpRequest();

      // определяем параметры HTTP запроса
      request.open("POST","/create_client");

      // формируем заголовок (данный заголовок обязателен для отправки формы на сервер)
      request.setRequestHeader("Content-type","application/x-www-form-urlencoded");

      // отправка запроса на сервер
      request.send(str);

      // обрабатываем что нам пришло с сервера
      request.onreadystatechange = function (){

        //если запрос успешный со статусом 200
        if(request.readyState === 4 && request.status === 200){

          // инициализируем переменную
          var elemA;

          // если ответ "ок" - то есть запрос на консультацию успешно добавлен
          if(request.responseText === "ок"){

            // активируем анимацию скрытия формы
            item.classList.add("form--hide");

            // создаем элемент в который записываем ответ от сервера
            elemA = document.createElement("DIV");
            elemA.classList.add("success","success--show");
            elemA.innerText = "Ваш запрос принят!";

            // скрываем форму
            setTimeout(function (){
              item.classList.add("form--none");
              item.classList.remove("form--hide");
              item.classList.add("form--show");
            }, 900);

            // отрисовываем ответ от сервера и сбрасываем форму
            setTimeout(function (){
              item.insertAdjacentElement("beforebegin",elemA);
              item.reset();
            }, 1000);

            // удаляем ответ от сервера
            setTimeout(function (){
              elemA.parentNode.removeChild(elemA);
              item.classList.remove("form--none");
            }, 3000);

            // удаляем класс показа формы
            setTimeout(function (){
              item.classList.remove("form--show");
            }, 4000);
          }
          // если ответ "ошибка" - то есть произошла ошибка при добавлении в базу данных
          else if(request.responseText === "ошибка"){

            // активируем анимацию скрытия формы
            item.classList.add("form--hide");

            // создаем элемент в который записываем ответ от сервера
            elemA = document.createElement("DIV");
            elemA.classList.add("error","error--show");
            elemA.innerText = "Ошибка базы данных!";

            // скрываем форму
            setTimeout(function (){
              item.classList.add("form--none");
              item.classList.remove("form--hide");
              item.classList.add("form--show");
            }, 900);

            // отрисовываем ответ от сервера и сбрасываем форму
            setTimeout(function (){
              item.insertAdjacentElement("beforebegin",elemA);
            }, 1000);

            // удаляем ответ от сервера
            setTimeout(function (){
              elemA.parentNode.removeChild(elemA);
              item.classList.remove("form--none");
            }, 3000);

            // удаляем класс показа формы
            setTimeout(function (){
              item.classList.remove("form--show");
            }, 4000);

          }
          // если ответ "данные не корректные" - то есть неправильный телефон, вин или список нужных запчастей
          else if(request.responseText === "Пожалуйста введите корректные данные."){

            // создаем элемент в который записываем ответ от сервера
            elemA = document.createElement("DIV");
            elemA.classList.add("error","error--text","error--show");
            elemA.innerText = "Пожалуйста введите корректные данные.";

            // отрисовываем ответ от сервера
            item.insertAdjacentElement("beforebegin",elemA);

            // скрываем ответ от сервера
            setTimeout(function (){
              elemA.classList.add("error--hide");
              elemA.classList.remove("error--show");
            },5000);

            // удаляем ответ от сервера
            setTimeout(function (){
              elemA.parentNode.removeChild(elemA);
            },7000);
          }
          // по умолчанию
          else{
            console.log("Нет валидного ответа");
          }
        }
      }
    }
  });
});

//=== Скрипт про фокусе проверяет есть ли класс "form__input--invalid или form__textarea--invalid" если есть удаляет ===//

var inputValid = document.querySelectorAll("input,textarea");

inputValid.forEach(function (item){
  item.addEventListener("focus", function (){

    if(this.classList.contains("form__input--invalid")){

      this.classList.remove("form__input--invalid");

    }else if(this.classList.contains("form__textarea--invalid")){

      this.classList.remove("form__textarea--invalid");
    }
  });
});
