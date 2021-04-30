/*
 * Generic scaffolding for making an asynchronous network request.
 * We use Fetch because it is supported by all browsers and returns a Promise.
 * For the dummy API, there are no credentials required but you would typically include them within the request URL or the `headers` object.
 */

// Make asynchronous request to the API
export async function queryEcommerceApi(endpoint) {
  // Replace with your own API URL
  const fakeStore = 'https://fakestoreapi.com/';
  const root = fakeStore + endpoint;
  try {
    let response = await fetch(root, {
      headers: {
        //  Add access token here
        authorization: null,
      },
      method: 'GET',
    });
    // Handle network error
    if (!response.ok) {
      throw new Error(`HTTP error. Status = ${response.status}`);
    } else {
      let data = await response.json();
      //return data;
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
}
