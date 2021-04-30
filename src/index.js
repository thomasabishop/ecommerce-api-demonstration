import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { queryEcommerceApi } from '../src/scripts/requestData';
import renderProduct from '../src/scripts/renderProductListing';

//import { queryEcommerceApi } from '../src/scripts/requestData';

queryEcommerceApi('products');

const productGrid = document.getElementById('ProductGrid');
const renderButton = document.getElementById('RenderButton');

renderButton.addEventListener('click', function () {
  renderProduct(productGrid);
});
