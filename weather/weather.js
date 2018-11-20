const request = require('request');
const _ = require('lodash')

var getWeather = (latitude, longitude, callback) => {
    return new Promise((resolve, reject) =>{
        request({
            url: 'https://api.darksky.net/forecast/68dd6119c67be0c141d616fad63bae77/'+latitude+','+longitude,
            proxy:'http://proxysp.vivo.com.br:8080',
            json: true,
        }, (error, response, body) => {
            if(!error && response.statusCode === 200){
                let tempF = _.get(body, "currently.temperature", 32);
                let tempC = (tempF-32) * (5/9) 
                let aparentF = _.get(body, "currently.apparentTemperature", 32);
                let aparentC = (aparentF-32) * (5/9);
                resolve({
                    temperatura: tempC + "ºC",
                    temperaturaAparente: aparentC + "ºC"
                })
            }else{
                reject("Não foi possível conectar com a API")
            }
        })
    })
}

module.exports.getWeather = getWeather;
