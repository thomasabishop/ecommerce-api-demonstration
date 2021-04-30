/**
 * This function generates an individual product listing for insertion into the DOM, appended to the parent product grid
 */

const products = [
  {
    title: 'A camera',
    description: 'Lorem ipsum',
    price: 22.59,
  },
  {
    title: 'A shoe',
    description: 'Lorem ipsum',
    price: 5.99,
  },
];

export default function renderProduct(parentElement, productDetails) {
  let product = `
    <div class="Product">
      <h3 class="h6">Product test</h3>
        <p class="ProductDescription">
          Lorem ipsum dolar sit avec amet consqutar lim blah blah
        </p>
        <p class="text-primary font-weight-bold">£1.00</p>
        <span class="badge badge-primary">category</span>
        <span class="badge badge-light">sub-category</span>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = product;
  parentElement.appendChild(wrapper);
}
