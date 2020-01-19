import { define, html } from 'hybrids';
import fromTemplate from '..';


function getTextForColor(pillColor) {
  switch (pillColor) {
    case 'red':
      return 'Nimm die rote Pille — du bleibst hier im Wunderland und ich werde dir zeigen wie tief das Kaninchenloch reicht.';
    case 'blue':
      return 'Nimm die blaue Pille — die Geschichte endet, du wachst in deinem Bett auf und glaubst was du auch immer glauben willst.';
    default:
      return '';
  }
}

function withText(component) {
  component.text = {
    connect: (host, key, invalidate) => {
      host[key] = host.getAttribute('text');
      const listener = ({ detail }) => {
        host[key] = host.getAttribute('text') || getTextForColor(detail);
        invalidate();
      };
      const pills = document.querySelectorAll('colored-pill');
      pills.forEach((pill) => pill.addEventListener('take-pill', listener));
      return () => pills.forEach((pill) => pill.removeEventListener('take-pill', listener));
    },
  };
  return component;
}

const Morpheus = ({ text }) => html`<p>${text}</p>`;

define('morpheus-says', withText(fromTemplate(Morpheus)));
