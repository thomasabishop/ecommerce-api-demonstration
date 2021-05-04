import { productTemplate } from './productTemplate';

test('returns string', () => {
  expect(
    typeof productTemplate({
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      title: 'A product name',
      description: 'Information about the product',
      price: 23.99,
      category: 'jewelry',
    })
  ).toBe('string');
});
