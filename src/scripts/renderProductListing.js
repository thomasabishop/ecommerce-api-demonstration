/**
 * This function generates an individual product listing for insertion into the DOM, appended to the parent product grid
 */

import { productTemplate } from './productTemplate';

export function renderProducts(data) {
  const productGrid = document.getElementById('ProductGrid');
  function domInsert(parentElement, product) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = product;
    parentElement.appendChild(wrapper);
  }

  // Have added a delay, so that you will always see the spinner effect and to simulate slower networks
  data.map((datum) => domInsert(productGrid, productTemplate(datum)));
}
