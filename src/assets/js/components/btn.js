const btns = document.querySelectorAll('.request__open')

btns.forEach(btn => {
  btn.addEventListener('click', () => {

    btn.parentNode.classList.toggle('request__col--active');

    if(btn.title === "открыть"){
      btn.title = "закрыть";
    }else{
      btn.title = "открыть";
    }

  })
})
