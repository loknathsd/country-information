import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Weather = () => {
  const [cityWeather,setCityWeather] = useState({});

  let {city} = useParams();
  

    useEffect(()=>{
        const url = `http://api.weatherstack.com/current?access_key=c9401cb1939cb082988d64fcb10174b3&query=${city}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCityWeather(data))
    },[])


    return (
        <div >
            <h2 className='m-5'>{city} City Weather</h2>

            <div style={{border:'2px solid red', width:'50%',margin:'auto', padding:'50px'}}>
                <div>
                <img src={cityWeather?.current?.weather_icons}  alt="" />
                </div>
                <h2>temperature : {cityWeather?.current?.temperature}</h2>
                <h2>Wind Speed : {cityWeather?.current?.wind_speed}</h2>
                <h2>Precip : {cityWeather?.current?.precip}</h2>
            </div>
        </div>
    );
};

export default Weather;