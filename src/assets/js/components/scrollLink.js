const links = document.querySelectorAll('a[href*="#"]');
const header = document.querySelector('.header__top-panel').getBoundingClientRect().height

links.forEach(item => {

  item.addEventListener("click", (e) => {
    e.preventDefault();

    const blockID = item.getAttribute('href');
    const elem = document.querySelector('' + blockID);

    window.scrollTo({
      top: getCoords(elem) - header,
      behavior: "smooth"
    })

    if(navigation.classList.contains("navigation--show")){
      hideMenu();
    }

  });

});
