const request = require("request");

const forcast=(latitude, longitude,callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=93f36cd80dc0ee8678c8b416bb2168be&query="+latitude+","+longitude+"&units=f";
    request({url:url,json:true},(error,response)=>{
        if (error){
            callback('unable to connect the weather service..',undefined);
        }
        else if (response.body.error){
            callback('unable to find the location please try again..',undefined);
        }
        else {
            callback(undefined,`its ${response.body.current.weather_descriptions}. The current temperature is ${response.body.current.temperature} degrees and there are ${response.body.current.precip}% chances of Rain.`)
        }
    })
}
module.exports = forcast;