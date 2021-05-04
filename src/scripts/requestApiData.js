/*
 * Generic scaffolding for making an asynchronous network request.
 * We use Fetch because it is supported by all browsers and returns a Promise.
 * For the dummy API, there are no credentials required but you would typically include them within the request URL or the `headers` object.
 * @function renderProductListing
 * @param {string} endpoint : the query string corresponding to the resource requested from the API
 * @return {Promise} : a pending Promise object that will either resolve or reject the request
 */

export default async function queryEcommerceApi(endpoint) {
  // Root URL of the API;
  const fakeStore = 'https://fakestoreapi.com/';
  //  Concatenate root URL with request string:
  const root = fakeStore + endpoint;
  try {
    // Make network request:
    let response = await fetch(root, {
      headers: {
        //  Add access token here, or append to endpoint var
        authorization: null,
      },
      method: 'GET',
    });
    // Handle network error
    if (!response.ok) {
      throw new Error(`HTTP error. Status = ${response.status}`);
    } else {
      // Return data as JSON
      let data = await response.json();
      return data;
    }
  } catch (error) {
    // Handle code error
    console.error(error);
  }
}
