const router = require('express').Router();
const {getRates, getBase, getCurrency, getBaseCurrency} = require('../controllers/RateController');

var response = {};
router.get('/rates', (req, res) => {
    try{
        if(Object.entries(req.query).length === 0) {
            getRates().then((data) => {
                var data = JSON.parse(data);
                response = {
                    results: data,
                    base: data['base'],
                    date: data['date'],
                    rates: data['rates']
                };
                res.status(200).json(response);
            })
            .catch(err => {
                response = {
                    status: false,
                    message: 'Oops an error occur try again later',
                }
                res.status(400).send(response);
                console.log(err);
            });
        } else {
            console.log(req.query);
            const base = req.query.base;
            const currency = req.query.currency;
            if(base != null & currency != null) {
                getBaseCurrency(base, currency).then((data) => {
                    var data = JSON.parse(data);
                    response = {
                        results: data,
                        base: data['base'],
                        date: data['date'],
                        rates: data['rates']
                    };
                    res.status(200).send(response);
                })
                .catch(err => {
                    response = {
                        status: false,
                        message: 'Oops an error occur try again later',
                    }
                    res.status(400).send(response);
                    console.log(err);
                });
            } else if(base != null) {
                getBase(base).then((data) => {
                    var data = JSON.parse(data);
                    response = {
                        results: data,
                        base: data['base'],
                        date: data['date'],
                        rates: data['rates']
                    };
                    res.status(200).send(response);
                })
                .catch(err => {
                    response = {
                        status: false,
                        message: 'Oops an error occur try again later',
                    }
                    res.status(400).send(response);
                    console.log(err);
                });
            } else if(currency != null) {
                getCurrency(currency).then((data) => {
                    var data = JSON.parse(data);
                    response = {
                        results: data,
                        base: data['base'],
                        date: data['date'],
                        rates: data['rates']
                    };
                    res.status(200).send(response);
                })
                .catch(err => {
                    response = {
                        status: false,
                        message: 'Oops an error occur try again later',
                    }
                    res.status(400).send(response);
                    console.log(err);
                });
            } else {
                response = {
                    status: false,
                    message: 'Oops an error occur try again later',
                }
                res.status(400).send(response);
            }
        }
    } catch(e) {
        console.log(e);
        response = {
            status: false,
            message: 'Oops an error occur try again later',
        }
        res.status(400).send(response);
    }
});

module.exports = router;