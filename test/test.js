let bittrex = require('../bittrex.js')('d43b65610b2e497c8a9b5427ae03abf1', 'dd0784b45a9846b68610c495208b19d4');

// bittrex.public.getTicker('ETH-LTC').then(res=>{console.log('TICKER\n', res, '\n**********\n')}).catch(e=>{console.error(e)});

// bittrex.market.getOpenOrders().then(res=>{console.log('Open Orders\n', res, '\n**********\n')}).catch(e=>{console.error(e)});

// bittrex.account.getBalance('ETH').then(res=>{console.log('Balance\n', res, '\n**********\n')}).catch(e=>console.error(e));

// // bittrex.public.getCurrencies().then(res => {console.log('Currencies', res)}).catch(e=>{console.error(e)});

// bittrex.public.getMarketSummaries().then(res => {console.log('Markets', res)}).catch(e=>{console.error(e)});

bittrex.account.getBalances().then(res => {console.log('Balances', res)}).catch(e=>{console.error(e)});