import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisibleCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountry = (country) => {
        // console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisibleCountries(newVisitedCountries);

    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    //remove item from an array in a state 
    //use filter to selected all the elements except the one you want to remove

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Visited Countries */}
            <div>
                <h4>Visited countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* Display  countries*/}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag} alt=""></img>)
                }
            </div>
        <div className="country-container">
                        {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;