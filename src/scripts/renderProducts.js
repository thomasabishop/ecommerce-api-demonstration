/**
 * For each product returned from API, generate an product listing and insert into DOM.
 * @function renderProduct
 * @param {array} data :Promise that will resolve to an array of objects, where each object corresponds to a product
 * @param {object} domElement : DOM node that will  serve as parent to the products
 * @return {object} : NodeList of DOM elements
 * @example renderProducts(data, productGrid)
 */

import { productTemplate } from './productTemplate';

export default function renderProducts(data, domNode) {
  //  For each product returned by the promise, format using template literal (see /scripts/productTemplate.js)
  //  Create wrapper, append wrapper to domNode param
  const domInsert = (domNode, product) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = product;
    domNode.appendChild(wrapper);
  };
  // Iterate through products and insert
  data.map((datum) => domInsert(domNode, productTemplate(datum)));
}
