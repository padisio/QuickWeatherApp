import React, { useState } from 'react';

import { AddLocation } from './components/AddLocation';
import { WeatherGrid } from './components/WeatherGrid';
const QuickWeatherApp = () => {
    
    // const [id, setId] = useState(1);
    const [categories, setCategories] = useState([]);
    const handleReset = () =>{
        setCategories([]);
    }

    // const handleAdd = () =>{
    //     setCategories ((cat) => [...cat, 'One Piece']);
    // }
    return <> 
        <div className='cab'>

         <img onClick={handleReset}  className='logo cabeceraTarjeta tituloTarjeta' alt = 'logo' src= 'https://www.seekpng.com/png/full/133-1330400_weather-icon-png-image-transparent-background-weather-icon.png' /><h1 onClick={handleReset} className='cabeceraTarjeta'>Quick Weather App</h1>
        </div>
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
