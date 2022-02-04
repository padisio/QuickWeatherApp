import React, { useState } from 'react';

import { AddLocation } from './components/AddLocation';
import { WeatherGrid } from './components/WeatherGrid';

const QuickWeatherApp = () => {
    
    const [categories, setCategories] = useState([]);
    
    // const handleAdd = () =>{
    //     setCategories ((cat) => [...cat, 'One Piece']);
    // }
    return <> 
         <img className='logo cabeceraTarjeta tituloTarjeta' alt = 'logo' src= 'https://www.seekpng.com/png/full/133-1330400_weather-icon-png-image-transparent-background-weather-icon.png' /><h1 className='cabeceraTarjeta'>Quick Weather App</h1>
         <AddLocation setCategories={setCategories}/>
         <hr/>
         
         <ol>
             {
             categories.map(category =>  <WeatherGrid key={category} category={category}/>)
             }
         </ol>
     </>;
 };

export default QuickWeatherApp;
