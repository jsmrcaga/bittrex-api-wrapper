let factory = function(request){
	let market = {};

	market.buyLimit = function(market, quantity, rate){
		return request('/market/buylimit', {market:market, quantity: quantity, rate:rate});
	};

	market.sellLimit = function(market, quantity, rate){
		return request('/market/selllimit', {market:market, quantity: quantity, rate:rate});
	};

	market.cancel = function(uuid){
		return request('/market/cancel', {uuid:uuid});
	};

	market.getOpenOrders = function(market){
		return request('/market/getopenorders', {market:market});
	};

	return market;
};

module.exports = factory;