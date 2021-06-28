/* ============ Переменные =============*/

const scrollToHandler = document.querySelector(".up");
const scrollToHandlerBtn = scrollToHandler.querySelector(".up__button");
const scrollConsultation = document.querySelector("#consultation");

/* ============ Переменные =============*/


/* ============ События =============*/

window.addEventListener("scroll", function (){

  const box = scrollConsultation.getBoundingClientRect().top + pageYOffset - 90;

  if(pageYOffset >= box){

    if(!scrollToHandler.classList.contains("up--active")){
      scrollToHandler.classList.add("up--active");
      scrollToHandler.classList.add("up--show");
    }
  }else{

    if(scrollToHandler.classList.contains("up--active")){
      scrollToHandler.classList.remove("up--show");

      setTimeout(function (){
        scrollToHandler.classList.remove("up--active");
      },500);
    }
  }
});

scrollToHandlerBtn.addEventListener("click",function (){

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

/* ============ События =============*/
