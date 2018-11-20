const request = require('request');
const _ = require('lodash')

function geocodeAdress(adress){
    return new Promise((resolve, reject) =>{
        var encodedAddress = encodeURIComponent(adress);
        request({
            url: 'http://www.mapquestapi.com/geocoding/v1/address?key=x&location=' + encodedAddress,
            json: true,
        }, (error, response, body) => {
            if(body){
                if(_.get(body, "results[0].locations[0]", null)){
                    resolve({
                        endereço: _.get(body, "results[0].locations[0].street", "Endereço não encontrado"),
                        latitude: _.get(body, "results[0].locations[0].displayLatLng.lat", "Latitude não encontrado"),
                        longitude: _.get(body, "results[0].locations[0].displayLatLng.lng", "Longitude não encontrado"),
                    })
                }
                else{
                    reject("Erro: Nenhum resultado obtido")
                }
            } 
        });
    })
}

module.exports.geocodeAdress = geocodeAdress;


