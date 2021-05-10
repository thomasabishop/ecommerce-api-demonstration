/**
 * For each product returned from API, generate an product listing and insert into DOM.
 * @function renderProduct
 * @param {array} data :Promise that will resolve to an array of objects, where each object corresponds to a product
 * @param {object} domNode : static DOM node that will  serve as parent to one of two states: (1) the products array or (2) a blank div, used in between populating requests, or if no match is found
 * @return {object} : NodeList of DOM elements
 * @example renderProducts(data, productGrid)
 */

import { productTemplate } from './productTemplate';

export default function renderProducts(data, domNode) {
  // Create a wrapper as child to parent ProductsGrid noded to hold products which can be removed on clear/ new API requests
  const allProductsWrapper = document.createElement('div');
  allProductsWrapper.setAttribute('id', 'AllProductsWrapper');
  allProductsWrapper.setAttribute('class', 'CustomRow');
  domNode.appendChild(allProductsWrapper);

  // Create individual nodes for each product returned from API
  const domInsert = (domNode, product) => {
    const singleProductWrapper = document.createElement('div');
    singleProductWrapper.innerHTML = product;
    domNode.appendChild(singleProductWrapper);
  };

  // Iterate through products and insert into DOM
  data.map((datum) => domInsert(allProductsWrapper, productTemplate(datum)));
}
