const request = require('./lib/request.js');
const Constants = require('./lib/const.js');

let factory = function(api_key, api_secret){
	let api = {};

	api.request = function(path, data){
		return request(api_key, api_secret, path, data);
	};

	api.public = require('./api/public.js')(api.request);
	api.market = require('./api/market.js')(api.request);
	api.account = require('./api/account.js')(api.request);

	return api;
};


module.exports = factory;