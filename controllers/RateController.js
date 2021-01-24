var request = require('request');

exports.getRates = () => {
    const options = {
        url: 'https://api.exchangeratesapi.io/latest',

    };
    return new Promise((resolve, reject) => {
        request.get(options, (err, res, body) => {
            if(err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
}

exports.getBase = (base) => {
    const options = {
        url: `https://api.exchangeratesapi.io/latest?base=${base.toUpperCase()}`
    };

    return new Promise((resolve, reject) => {
        request.get(options, (err, res, body) => {
            if(err) reject(err);
            resolve(body);
        })
    })
}

exports.getBaseCurrency = (base, currency) => {
    const options = {
        url: `https://api.exchangeratesapi.io/latest?base=${base.toUpperCase()}&symbols=${currency.toUpperCase()}`
    };

    return new Promise((resolve, reject) => {
        request.get(options, (err, res, body) => {
            console.log(res.statusCode);
            if(err) reject(err);
            if(res.statusCode == 200) {
                resolve(body);
            } else {
                reject('error');
            }
        })
    })
}

exports.getCurrency = (currency) => {
    const options = {
        url: `https://api.exchangeratesapi.io/latest?symbols=${currency.toUpperCase()}`
    };

    return new Promise((resolve, reject) => {
        request.get(options, (err, res, body) => {
            if(err) reject(err);
            resolve(body);
        })
    })
}