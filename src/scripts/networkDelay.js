/*
 * This function simulates a delayed network response, and renders a spinner in the interim between the API request and the rendering of the product listings. This is just to ensure that you can see the spinner in action. In reality, we won't use a timeout; the spinner will show/will not show depending on the speed of the API response.
 * @function networkDelay
 * @param {number} interval : the length of the delay in milliseconds
 * @param {function} func : the function to execute (callback)
 * @return {function} the spinner, then the callback function
 * @example networkDelay(2000,queryEcommerceApi('products/'))
 */

export default function networkDelay(interval, func) {
  setTimeout(function () {
    func();
  }, interval);
}
