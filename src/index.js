import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import scripts
import queryEcommerceApi from '../src/scripts/requestApiData';
import renderProducts from '../src/scripts/renderProducts';
import removeDomNode from '../src/scripts/removeDomNode';
import networkDelay from '../src/scripts/networkDelay';
import showSpinner from '../src/scripts/showSpinner';
// Retrieve DOM nodes:
const productGrid = document.getElementById('ProductGrid'); // Static parent node for listings 'page'
const renderButton = document.getElementById('RenderButton');
const clearButton = document.getElementById('ClearButton');

// Add and remove products from the DOM using 'Populate all data' & 'Clear data' buttons:
async function getAllProducts() {
  const products = await queryEcommerceApi('products');
  // When promise resolves, remove spinner from DOM
  if (products) {
    removeDomNode(productGrid, document.getElementById('Spinner'));
  }
  // Render product grid
  renderProducts(products, productGrid);

  // Disable 'Populate' button after first request
  renderButton.classList.add('disabled');
}

// Render products:
renderButton.addEventListener('click', function () {
  //  Display spinner during data fetch (simulate delay during development with timeout)
  showSpinner(productGrid);
  networkDelay(2000, getAllProducts);
});

// Clear products on event of new request:
clearButton.addEventListener('click', function () {
  removeDomNode(productGrid, document.getElementById('AllProductsWrapper'));
  // Re-enable 'Populate' button after clear
  renderButton.classList.remove('disabled');
});

/* Version of product request without timeout for the spinner */

//async function getAllProducts() {
//  showSpinner(productGrid);
//  const products = await queryEcommerceApi('products');
//  if (products) {
//    removeDomNode(productGrid, document.getElementById('Spinner'));
//  }
//  renderProducts(products, productGrid);

//  // Disable 'Populate' button after first request
//  renderButton.classList.add('disabled');
//}

//renderButton.addEventListener('click', function () {
//  //showSpinner(productGrid);
//  getAllProducts();
//});
