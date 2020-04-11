const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv = yargs
    .options({
        a: {
            demand:true,
            alias: 'adress',
            describe: 'Adress to fetch wether for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    geocode.geocodeAdress(argv.a)
        .then((localizacao)=>{
            weather.getWeather(localizacao.latitude, localizacao.longitude)
            .then((temperatura)=>{
                console.log("Temperatura atual:",temperatura.temperatura);
                console.log("Sensação térmica:", temperatura.temperaturaAparente);
            })
        }) 
        .catch((errorMessage) => {
            console.log(errorMessage)
        })
        
    //     (errorMessage, result) => {
    //     if(errorMessage){
    //         console.log(errorMessage)
    //     }else{
    //         weather.getWeather(result.latitude, result.longitude, (errorMessage, result)=>{
    //             if(result){
    //                 console.log("Temperatura atual:",result.temperatura);
    //                 console.log("Sensação térmica:", result.temperaturaAparente);
    //             }
    //         })
    //     }
    // })








    //teste




    //mais um teste

    //mais um teste

    //mais um teste

    //mais um teste

    //mais um teste2

    //mais um teste2

    //mais um teste2

    //mais um teste2
    //mais um teste2

