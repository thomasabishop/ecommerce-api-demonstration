const truncate = (str) => str.substring(0, 120).concat('...');

export const productTemplate = (props) => {
  return `<div class="Product">
      <img src="${
        props.image
      }" class="img-thumbnail mx-auto d-block  mb-4 ProductImage"/>
      <h3 class="h6">${props.title}</h3>
        <p class="ProductDescription">
          ${truncate(props.description)}
        </p>
        <p class="text-primary font-weight-bold">&#163;${props.price}</p>
        <span class="badge badge-info">${props.category}</span>
    </div>
  `;
};
