const geoCode = require("./utils/geoCode");
const forcast = require("./utils/forcast");
const address = process.argv[2];

if (!address){
    console.log("please provide the address");
}
else {
    geoCode(address, (error, {latitude,longitude,location}={}) => {
        if (error) {
          return console.log(error);
        }
       
        forcast(latitude, longitude, (error, forecastdata) => {
          if (error) {
            return console.log(error);
          }
          console.log(location);
          console.log(forecastdata);
        });
      });
}


