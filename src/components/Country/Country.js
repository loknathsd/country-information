import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Country = () => {
    const [country, setCountry] = useState({});
    const [error ,setError] = useState("")

    let navigate = useNavigate();
    let { name } = useParams();

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${name}`
        fetch(url)
            .then(res => res.json())
            .then(data =>setCountry(data[0]))

        .catch(err=>setError("Fetch error, please try again !!"))
    }, [])



    const handleWeather = (city) => {
       navigate(`/weather/${city}`)
    }



    return (
        <div>
            <h1 className='m-5'>Country Name: {country?.name?.common }</h1>


            <div style={{ border: '2px solid red', width: '50% ', margin: 'auto',padding:"50px" }}>
                <h3>Capital : {country.capital}</h3>
                <h3>Population : {country.population}</h3>
                <p>  <img className='img-fluid' src={country?.flags?.png} alt="" /></p>
               

            </div>
            <button onClick={() => handleWeather(country.capital)} className='btn btn-danger mt-4'>Capital Weather</button>

            <h3 className='mt-5 text-danger'>{error}</h3>
        </div>


    );
};

export default Country;