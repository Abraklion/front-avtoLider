/* ============ Переменные =============*/
const archiveIn = document.querySelectorAll(".request__archive");
const archiveDelete = document.querySelectorAll(".request__delete");
/* ============ Переменные =============*/


/* ============ События =============*/

archiveIn.forEach(function (item){

  item.addEventListener("click", function (evt){

    const res = window.confirm("Отправить в архив?")

    if(!res){
      evt.preventDefault();
    }
  });

});

archiveDelete.forEach(function (item){

  item.addEventListener("click", function (evt){
    const res = window.confirm("Удалить запрос навсегда?")

    if(!res){
      evt.preventDefault();
    }
  });

  const parentDel = item.parentNode.parentNode;

  if(!parentDel.classList.contains("request__row--archive")){
    parentDel.classList.add("request__row--archive");
  }

});

/* ============ События =============*/




