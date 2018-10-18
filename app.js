
const yargs = require('yargs');

const weather = require('./weather/weather');
const geocode = require('./geocode/geocode');

var argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe:'Address to fetch whether for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv, (err, result) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
        weather.getWhether(result.latitude, result.longitude, function(err, result) {
            if(err) { 
                console.log(error);
            } else {
                console.log(`It's currently ${result.temperature}`);
            }
        });
    }
});


