import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import queryEcommerceApi from '../src/scripts/requestApiData';
import renderProducts from '../src/scripts/renderProducts';
import networkDelay from '../src/scripts/networkDelay';

console.log(queryEcommerceApi('products/1'));

const productGrid = document.getElementById('ProductGrid');
const renderButton = document.getElementById('RenderButton');

function getAllProducts() {
  queryEcommerceApi('products').then((data) =>
    renderProducts(data, productGrid)
  ),
    // Disable 'Populate' button after first request
    renderButton.classList.add('disabled');
}

renderButton.addEventListener('click', function () {
  networkDelay(3000, getAllProducts);
});
