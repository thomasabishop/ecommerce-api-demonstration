# Frontend e-commerce demonstrations

This project exists to demonstrate how to create the following functionality using vanilla Javascript, Bootstrap 4 and an e-commerce API:

| Feature      | Current status |  Time estimate |
| ----------- | ----------- |  ----------- |
|  Query an API and populate product listings| Complete      | 1 day | 
|  Send requests to API using query parameters derived from faceted navigation | Pending        | 3 days |
|  Sort and filter returned results  |  Pending     | 1 day |
|  Add products to a cart, update cart |  Pending     | 2 days | 
|  Display spinner/loading interface whilst asynchronous requests are populated  | In progress     | < 1 day |
|  Display x number of products by page, provide pagination | Pending, need more info       | ...|
|  Conditionally render filters based on product type | Pending   | ...|


## Running the project 
```
git clone ...
npm install
npm start
```

### Run test suite
```
npm run test 
```

## Products API 
The demo makes use of the [Fake Store API](https://fakestoreapi.com/) to simulate the functionality you will be creating with your own API within Umbraco. You should be able to swap out variables in the demo code with your own endpoint and authentication token. (I can assist with the implementation.)

### Javascript
Everything is written as functions. That way you can just copy and paste into your own environment. I use modular imports/exports for readability but I imagine you can just add the functions as a block to your Umbraco scripts file. 
Each function has full documentation and is unit tested. 
The entrypoint is `index.js` and the individual functions live in `/scripts`. 

##  Styles
The demo uses Bootstrap 4 as this is the framework you intend to use. In a few cases, such as the product listing grid, I have had to augment the Bootstrap inline attributes with custom CSS. This is because Bootstrap doesn't handle dynamically-generated content particularly well. It's minimal and you can just copy and paste the CSS or use your own Umbraco-based grid layout. 
