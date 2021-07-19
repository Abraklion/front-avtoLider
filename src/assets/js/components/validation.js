/* незадействованый */

/* ============ Переменные =============*/
var formConsultation = document.querySelectorAll(".form");

// обходим массив элементов (две формы)
formConsultation.forEach(function (item){

  // вешаем на каждую события submit
  item.addEventListener("submit", function (evt){

    // получаем элементы формы
    var phoneConsultation = this.querySelector("[name=phone]");
    var vinConsultation = this.querySelector("[name=vin]");
    var sparesConsultation = this.querySelector("[name=spares]");

    // проверяем проходят ли они валидацию
    if((!phoneConsultation.value || phoneConsultation.value.length !== 17) || (!vinConsultation.value || vinConsultation.value.length < 5 || vinConsultation.value.length > 17) ||  (!sparesConsultation.value || sparesConsultation.value.length < 5 || sparesConsultation.value.length > 1000)){
      evt.preventDefault();

      if(phoneConsultation.classList.contains("form__input--invalid")){
        phoneConsultation.classList.remove("form__input--invalid");
      }

      if(vinConsultation.classList.contains("form__input--invalid")){
        vinConsultation.classList.remove("form__input--invalid");
      }

      if(sparesConsultation.classList.contains("form__textarea--invalid")){
        sparesConsultation.classList.remove("form__textarea--invalid");
      }

      if(!phoneConsultation.value || phoneConsultation.value.length < 17){
        phoneConsultation.classList.add("form__input--invalid");
      }

      if(!vinConsultation.value || vinConsultation.value.length < 5 || vinConsultation.value.length > 17){
        vinConsultation.classList.add("form__input--invalid");
      }

      if(!sparesConsultation.value || sparesConsultation.value.length < 5 || sparesConsultation.value.length > 1000){
        sparesConsultation.classList.add("form__textarea--invalid");
      }
    }
  });

  // получаем элементы формы
  var phoneConsultation = item.querySelector("[name=phone]");
  var vinConsultation = item.querySelector("[name=vin]");
  var sparesConsultation = item.querySelector("[name=spares]");

  // вешаем события на Телефон
  phoneConsultation.addEventListener("focus", function (){

    if(phoneConsultation.classList.contains("form__input--invalid")){
      phoneConsultation.classList.remove("form__input--invalid");
    }

  });

  // вешаем события на Vin
  vinConsultation.addEventListener("focus", function (){

    if(vinConsultation.classList.contains("form__input--invalid")){
      vinConsultation.classList.remove("form__input--invalid");
    }

  });

  // вешаем события на Список запчастей
  sparesConsultation.addEventListener("focus", function (){

    if(sparesConsultation.classList.contains("form__textarea--invalid")){
      sparesConsultation.classList.remove("form__textarea--invalid");
    }

  });

});
