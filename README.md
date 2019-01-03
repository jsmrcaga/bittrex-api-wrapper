# Bittrex API Wrapper

This is a simple [Bittrex API](https://bittrex.com/home/api) wrapper. It gives you the ability to 
send any request to [Bittrex's API](https://bittrex.com/home/api), or to send known requests via 
a simple class.

I recommend to read the [official API](https://bittrex.com/home/api) in order to better understand and
use this module.

## Installation
`npm install bittrex-api-wrapper`

## Instanciation
```javascript
const bittrex = require('bittrex-api-wrapper')('<API_KEY>', '<API_SECRET>');
```

## API

This wrapper provides the entire Bittrex API. It follows a very simple nomenclature:

```javascript
bittrex.<public|market|account>.<methodCamelCase>(parameters);
```
Each method returns a promise. Bittrex responses are **pre-treated**, meaning that
any method will throw an error if the response does not contain `success:true`

As an example:

```javascript
const bittrex = require('bittrex-api-wrapper')('<API_KEY>', '<API_SECRET>');

bittrex.account.getBalance('ETH').then(res=>{
	console.log(res)
}).catch(e=>{
	console.error(e)
});
```
Every **parameter** is in the order the [API documentation](https://bittrex.com/home/api) gives it

## Request
You can also use `#request` to perform manual requests:

```javascript
bittrex.request('/path', {currency: 'ETH', quantity: 0.45});
```

Which will also return a `Promise`

## Testing

In the test/test.js file you will find some simple tests. You can just enter your `api_key` and `api_secret` to be able to launch them.