let factory = function(request){
	let public = {};

	public.getMarkets = function(){
		return request('/public/getmarkets');
	};

	public.getCurrencies = function(){
		return request('/public/getcurrencies');
	};

	public.getTicker = function(market){
		return request('/public/getticker', {market:market});
	};

	public.getMarketSummaries = function(){
		return request('/public/getmarketsummaries');
	};

	public.getMarketSummary = function(market){
		return request('/public/getmarketsummary', {market:market});
	};

	public.getOrderBook = function(market, type){
		// type = buy|sell|both
		return request('/public/getorderbook', {market:market, type:type});
	};

	public.getMarketHistory = function(market){
		return request('/public/getmarkethistory', {market:market});
	};

	return public;
};

module.exports = factory;