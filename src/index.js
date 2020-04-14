import initSr from './js/sr';
import TypeText from './js/TypeText';

import './style/main.scss';

window.onload = () => {
  var elements = document.getElementsByClassName('type-txt');
  for (var i=0; i<elements.length; i++) {
    var toType = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');

    if (toType) {
      new TypeText(elements[i], JSON.parse(toType), period);
    }
  }
};

$('a[href^="#"]').on('click', (event) => {
  const target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();