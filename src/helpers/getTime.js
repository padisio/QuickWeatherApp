export const getTime = async(inputValue, setCurrentWeather) => {

    // const url = `http://api.openweathermap.org/geo/1.0/zip?zip=12540,ES&appid=${apikey}`
    const apiKey= 'cfb0c6e0588118cb657e52f0835a331e';
    
    
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    const {name, main, weather, wind, clouds} = data;
    const {all:cloudsPercent} = clouds;
    let {temp, temp_max , temp_min, feels_like:sensacionTermica, humidity} = main;
    const {main:clima, description:climaDescript}= weather[0];
    const {speed:windSpeed} = wind;
    temp = Math.round(temp - 273.15);
    temp_max =Math.round(temp_max - 273.15);
    temp_min =Math.round(temp_min - 273.15);
    sensacionTermica =Math.round(sensacionTermica - 273.15);
    console.log(`En ${name} la temperatura es de ${temp}° con una sensacion termica de ${sensacionTermica}°
    En este momento el tiempo es: ${clima}(${climaDescript}) con un ${cloudsPercent}% de nubes y un ${humidity}% de humedad
    El rango de temperatura es de min ${temp_min}° y max ${temp_max}° y la velocidad del viento es de ${windSpeed} m/s`);
   
    setCurrentWeather({
        name : {name},
        temp: {temp},
    });

};
