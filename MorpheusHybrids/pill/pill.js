import { html, define, dispatch } from 'hybrids';
import styles from './pill.css';
import fromTemplate from '..';

function withColor(component) {
  component.color = 'white';
  return component;
}

function click(host) {
  dispatch(host, 'take-pill', { detail: host.color });
}

function ColloredPill({ color }) {
  return html`
  <style>
      :host{ --color: ${color}; }
  </style>

  <button onclick="${click}">
    Take the ${color} pill!
  </button>
`.style(styles);
}

define('colored-pill', withColor(fromTemplate(ColloredPill)));
