const geoCode = require("./utils/geoCode");
const forcast = require("./utils/forcast");
const address = process.argv[2];

if (!address){
    console.log("please provide the address");
}
else {
    geoCode(address, (error, data) => {
        if (error) {
          return console.log(error);
        }
       
        forcast(data.latitude, data.longitude, (error, forecastdata) => {
          if (error) {
            return console.log(error);
          }
          console.log(data.location);
          console.log(forecastdata);
        });
      });
}


