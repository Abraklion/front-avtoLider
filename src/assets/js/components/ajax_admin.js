
/* ============ Переменные ============= */
const archiveIn = document.querySelectorAll(".request__archive");
const archiveDelete = document.querySelectorAll(".request__delete");
/* ============ Переменные ============= */

/* ============ Функции ============= */

// делаем запрос на сервер средствами ajax
function xhr(elem,url,str){

  //открываем модальное окно с вопросом str
  const res = window.confirm(str);

  //если ответ да
  if(res){

    // создаем экземпляр класса "XMLHttpRequest"
    var request = new XMLHttpRequest();

    // определяем параметры HTTP запроса
    request.open("GET",url);

    // отправка запроса на сервер
    request.send();

    // обрабатываем что нам пришло с сервера
    request.onreadystatechange = function (){

      //если запрос успешный со статусом 200
      if(request.readyState === 4 && request.status === 200){

        // если ответ "ок" - то есть запрос успешный
        if(request.responseText === "ок"){

          //находим строку
          var parent = elem.parentNode.parentNode;

          // отправить элемент в архив
          if (str === "Отправить в архив?"){

            //определяем на какой страницы находимся сартировке или архиве
            var strUrl = urlPars(0);

            // если сартировке
            if(strUrl === "sorting"){

              //удаляем строку
              parent.remove();

            }
            // если архив
            else if(strUrl === "archive"){

              //получаем id записи которую помещаем в архив
              var strKey = url.split("/").pop();

              //получаем родительскую строку
              var parentLine = elem.parentNode;

              //удаляем ссылку
              elem.remove();

              //создаем новую ссылку
              var elemNew = document.createElement("A");
              elemNew.setAttribute("href","/del/" + strKey);
              elemNew.setAttribute("class","request__delete");
              elemNew.setAttribute("title","удалить");
              elemNew.innerHTML = '<svg class="request__delete-svg" width="19" height="19" aria-hidden="true"><use xlink:href="../static/img/sprite.svg#rubbish" /></svg>';

              //обновляем ссылку
              parentLine.appendChild(elemNew);

              //вешаем на ссылку события клика
              elemNew.addEventListener("click", function (evt){

                //отменяем действия по умолчанию
                evt.preventDefault();

                //вызаваем функцию на удаления
                xhr(this,this.href,"Удалить запрос навсегда?");
              });

              // красим строку
              parent.classList.add("request__row--archive");
            }
          }
          // удалить элемент
          else if(str === "Удалить запрос навсегда?"){
            parent.remove();
          }
        }
        // если что то пошло не так
        else{
          console.log("Произошла ошибка при обращении к бд");
        }
      }
    }
  }
}

// парсим url
function urlPars(key,url) {

  //обрезаем все символы проме первого из строки и возврощаем новую строку
  var query = url || window.location.pathname.substring(1);

  //превращаем строку в строку по разделителю /
  var parts = query.split("/")

  //возврощаем первый элемент массива
  return parts[key];
}
/* ============ Функции ============= */

/* ============ События =============*/

archiveIn.forEach(function (item){

  item.addEventListener("click", function (evt){

    //отменяем действия по умолчанию
    evt.preventDefault();

    //вызаваем функцию в архив
    xhr(this,this.href,"Отправить в архив?");
  });

});

archiveDelete.forEach(function (item){

  item.addEventListener("click", function (evt){

    //отменяем действия по умолчанию
    evt.preventDefault();

    //вызаваем функцию на удаления
    xhr(this,this.href,"Удалить запрос навсегда?");
  });

  // красим строки в архиве
  const parentDel = item.parentNode.parentNode;

  if(!parentDel.classList.contains("request__row--archive")){
    parentDel.classList.add("request__row--archive");
  }

});

/* ============ События =============*/
