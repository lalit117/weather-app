
var request = require('request');

function geocodeAddress(address, callback) {
    address = encodeURIComponent(address.a);

    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=Gztt3A1bX8cjKHQ8QQwBXLlg6ibY8A94&location=${address}`,
        json:true
    },function(err, response, body){
        if(err) {
            console.log('unable to connect user servers');   
        } else if(body.status == 'ZERO_RESULTS' ) {
            console.log('Unable to find that address');
        } else {
            callback(undefined, {
                latitude:body.results[0].locations[0].latLng.lat,
                longitude:body.results[0].locations[0].latLng.lng
            });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;