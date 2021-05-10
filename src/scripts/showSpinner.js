import { spinnerTemplate } from './spinnerTemplate';

export default function showSpinner(domNode) {
  const spinnerWrapper = document.createElement('div');
  spinnerWrapper.setAttribute('id', 'Spinner');
  spinnerWrapper.innerHTML = spinnerTemplate;
  return domNode.appendChild(spinnerWrapper);
}
