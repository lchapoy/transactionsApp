/**
 * Created by luis on 6/1/2016.
 */
var request = require('request');
var fs = require('fs');

exports.getCurrency=function(req, res) {
    request('https://openexchangerates.org/api/latest.json?app_id=e8c8f78f7e5a4ae49a780207d1a35bf5', function (error, response, body) {
        var rates=JSON.parse(body).rates;
        fs.writeFile("./Config/currencies/current.json", JSON.stringify(rates), function (err) {
            if (err)
                return res.status(400);
            if (!error && response.statusCode == 200) {
                res.status(200).json({USD:rates.USD,MXN:rates.MXN,EUR:rates.EUR,CAD:rates.CAD,CNY:rates.CNY,INR:rates.INR}); // Show the HTML for the Google homepage.
            }
        });

    })
};