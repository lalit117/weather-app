const request = require('request');

function getWhether(latitude, longitude, callback) {

    request({
        url : `https://api.darksky.net/forecast/65746cce35b837a67cc89ba91f98f114/${latitude},${longitude}`,
        json: true
    }, (err, response, body) => {
        if (! err  && response.statusCode === 200) {
            callback(undefined, {
                temperature : body.currently.temperature
            });
        } else {
            callback('Unable to connect server');
        }
    });
}

module.exports.getWhether = getWhether;
