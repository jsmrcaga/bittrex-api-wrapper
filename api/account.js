let factory = function(request){
	let account = {};

	account.getBalances = function(){
		return request('/account/getbalances');
	};

	account.getBalance = function(currency){
		return request('/account/getbalance', {currency:currency});
	};

	account.getDepositAddress = function(currency){
		return request('/account/getdepositaddress', {currency:currency});
	};

	account.withdraw = function(currency, address, quantity, paymentid){
		return request('/account/withdraw', {currency:currency, address:address, quantity:quantity, paymentid:paymentid});
	};

	account.getOrder = function(uuid){
		return request('/account/getorder', {uuid:uuid});
	};

	account.getOrderHistory = function(market){
		return request('/account/getorderhistory', {market:market});
	};

	account.getWithdrawalHistory = function(currency){
		return request('/account/getwithdrawalhistory', {currency:currency});
	};

	account.getDepositHistory = function(currency){
		return request('/account/getdeposithistory', {currency:currency});
	};	

	return account;
};

module.exports = factory;