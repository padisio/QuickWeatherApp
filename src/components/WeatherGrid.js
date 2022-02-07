import React, { useEffect, useState } from 'react';
import { MapView } from './MapView';

export const WeatherGrid = ({ category }) => {

    const [weather, setWeather] = useState({});
    
    const [Mapa, setMapa] = useState('');

    const [existe, setExiste] = useState(true);

    useEffect(() => {
        getTime();
    }, [])

    const getTime = async () => {
        
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        console.log(process.env.REACT_APP_WEATHER_API_KEY);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${category}&lang=ES&appid=${API_KEY}`
      

        const resp = await fetch(url);
        if (!resp.ok) {
            setExiste(false);
           
        }else{
            setExiste(true);
            const data = await resp.json();

            console.log(data);
    
            const { name, main, weather, wind, clouds, coord, sys } = data;
            const {country:pais} = sys;
            const { all: cloudsPercent } = clouds;
            let { temp, temp_max, temp_min, feels_like: sensacionTermica, humidity } = main;
            const { description: climaDescript, icon } = weather[0];
            const { speed: windSpeed } = wind;
            const { lat, lon } = coord;
            temp = Math.round(temp - 273.15);
            temp_max = Math.round(temp_max - 273.15);
            temp_min = Math.round(temp_min - 273.15);
            sensacionTermica = Math.round(sensacionTermica - 273.15);
            setMapa(<MapView lat = {lat} lon = {lon}/>);
      
            
    
    
            const resultado = {
                name: name.toUpperCase(),
                temp: temp,
                tmax: temp_max,
                tmin: temp_min,
                lat: lat,
                lon: lon,
                humidity: humidity,
                clouds: cloudsPercent,
                Descr: climaDescript.toUpperCase(),
                wind: windSpeed,
                pais : pais,
                icono: `https://openweathermap.org/img/wn/${icon}.png`,
                sensacionTermica: sensacionTermica,
            }
            console.log(resultado);
            setWeather(resultado);
        }
        
    }
    if(existe){
        return <div className='row tarjeta animate__animated animate__slideInDown'>

        <div className='row'>
            <div className='col-8 '>
                <h3 className='cabeceraTarjeta tituloTarjeta' >{weather.name} ({weather.pais}) </h3>
                <div className='cabeceraTarjeta'>({weather.lat} : {weather.lon})</div>
            </div>
            <div className='col-4 text-end cabeceraTarjetaContainer '>
                <h4 className='cabeceraTarjeta'>{weather.temp}°</h4>
                <img className='cabeceraTarjeta iconoTiempo' src={weather.icono} alt={weather.description} />
            </div>
        </div>

        <hr className='separador' />


        <div className='row'>

            <div className='col-6 container'>
                <ul className='list-group '>
                    <li className='list-group-item listaTiempo animate__animated animate__fadeInLeft animate__delay-1s'><span className='resaltado'>Situación actual:</span> {weather.Descr}</li>
                    <li className='list-group-item listaTiempo animate__animated animate__fadeInLeft animate__delay-1s'><span className='resaltado'>Temperatura:</span> {weather.temp}° ({weather.tmin}° min / {weather.tmax}° max)</li>
                    <li className='list-group-item listaTiempo animate__animated animate__fadeInLeft animate__delay-1s'><span className='resaltado'>Sensación Térmica:</span> {weather.sensacionTermica}°</li>
                    <li className='list-group-item listaTiempo animate__animated animate__fadeInLeft animate__delay-1s'><span className='resaltado'>Nubes:</span> {weather.clouds}%</li>
                    <li className='list-group-item listaTiempo animate__animated animate__fadeInLeft animate__delay-1s'><span className='resaltado'>Humedad:</span> {weather.humidity}%</li>
                    <li className='list-group-item listaTiempo animate__animated animate__fadeInLeft animate__delay-1s'><span className='resaltado'>Viento:</span> {weather.wind} m/s</li>

                </ul>
            </div>

            <div className='col-6 container'>
               {Mapa}
            </div>

        </div>

    </div>;

}else{
    return <div className='row tarjeta animate__animated animate__slideInDown errorCiudad'>
             <h3 className='cabeceraTarjeta tituloTarjeta' >Ciudad no encontrada: ({category})</h3>
        </div>
}
    }

