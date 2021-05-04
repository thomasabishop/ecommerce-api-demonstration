import 'regenerator-runtime/runtime';
import requestApiData from './requestApiData';

beforeEach(() => {
  fetch.resetMocks();
});

const product = {
  category: "men's clothing",
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  id: 1,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  price: 109.95,
  title: 'Foldsack No. 1 Backpack',
};

it('return API data (mock fetch)', async () => {
  fetch.mockResponseOnce(JSON.stringify(product));
  const data = await requestApiData('products/1');
  expect(data.title).toBe('Foldsack No. 1 Backpack');
  expect(data.price).toBe(109.95);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('return undefined for non existent property', async () => {
  fetch.mockResponseOnce(JSON.stringify(product));
  const data = await requestApiData('products/1');
  expect(data.xyz).toEqual(undefined);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('return network error', async () => {
  fetch.mockReject(() => Promise.reject('No response'));
  const data = await requestApiData('products/1');
  expect(data).toBe(undefined);
  expect(fetch).toHaveBeenCalledTimes(1);
});
