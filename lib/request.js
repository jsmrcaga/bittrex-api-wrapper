const fishingrod = require('fishingrod');
const crypto = require('crypto');
const querystring = require('querystring');

const request = function(api_key, api_secret, path, data){
	let params = {
		https:true,
		method:'GET',
		host: 'bittrex.com'
	};

	// prepare path of uri
	params.path = `/api/v1.1${path}?apikey=${api_key}&nonce=${Math.round((Math.random()*10000))}`;

	// set external data to path (like currency for example)
	if(data){
		params.path += '&' + querystring.stringify(data); 
	}

	// sign if needed
	if(!(/^\/public\//.test(path))){
		const hmac = crypto.createHmac('sha512', api_secret);
		hmac.update(new Buffer('https://' + params.host + params.path, 'utf8'));
		params.headers = {};
		params.headers['apisign'] = hmac.digest('hex');
	}

	// perform request using fishingrod
	return fishingrod.fish(params).then(res=>{
		try {
			let response = JSON.parse(res.response);

			// pre-catch API error
			if(!response.success){
				let e = new Error('Could not perform request to ' + path);
				e.res = res.response;
				throw e;
			}

			return response;
		} catch(e) {
			// we catch in case response is not JSON formatted
			throw e;
		}
	}).catch(e => {
		console.error(e);
		throw e;
	});
};

module.exports = request;