const iframe = document.createElement('iframe');

iframe.classList.add('contact__map','contact__map--pointer-events');
iframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A226fc664d55aa654226e730c00cb1f2a8c4ddec5fca94c87caad46d389e6dd57&amp;source=constructor';
iframe.title = "Карта местоположения магазина Автолидер";
iframe.width = "320";
iframe.height = "380";

let coordinate = document.querySelector('#about');
let currentPosition = getCoords(coordinate);

window.addEventListener('scroll', () => {

  const err = document.querySelector('.contact__map');

  if (!err) {
    if (currentPosition < pageYOffset) {
      document.querySelector('.contact__map-box').appendChild(iframe);
    }
  }
})
