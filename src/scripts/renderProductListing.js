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

  data.map((datum) => domInsert(productGrid, productTemplate(datum)));
}
