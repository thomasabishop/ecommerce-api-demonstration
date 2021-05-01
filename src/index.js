import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { queryEcommerceApi } from '../src/scripts/requestData';
import { renderProducts } from '../src/scripts/renderProductListing';

console.log(queryEcommerceApi('products/1'));

const renderButton = document.getElementById('RenderButton');
renderButton.addEventListener('click', function () {
  queryEcommerceApi('products').then((data) => renderProducts(data)),
    renderButton.classList.add('disabled');
});
