import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import './morpheus/morpheus';
import './pill/pill';

// Enable HMR for development
if (process.env.NODE_ENV !== 'production') module.hot.accept();

export default function fromTemplate(template) {
  return { render: template };
}
