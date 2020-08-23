import React, {useState} from 'react';

import Form from "./components/Form";
import Weather from "./components/Weather";



const App = () => {
    const [weather, setWeather] = useState([]);
    const myApi = '0446ebbce178a8901b3a40365bbf1dcb';

    // async function
    async function fetchData(event) {
        const city = event.target.elements.city.value
        const country = event.target.elements.country.value
        event.preventDefault()

    //async api request
        const dataApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${myApi}`)
            .then( res => res.json())
            .then(data => data)
        if(city && country) {

    //Api data request in setWeather
            setWeather({
                    data: dataApi,
                    city: dataApi.city,
                    country: dataApi.sys.country,
                    description: dataApi.weather[0].description,
                    temperature: Math.round(dataApi.main.temp -273.15),
                    error:""
                }

    // Error text execution
            )} else {
            setWeather({
                    data: '',
                    city: '',
                    country: '',
                    description: '',
                    temperature: '',
                    error:"Please input City and Country"
                }
            )}
    }

    return (
        <div className="App">
            <div className="container">
                <img className="image" src="https://lh3.googleusercontent.com/Ej5XP7lHGWcCZ8GI5Sej7y81M1wKSbXt-A5HxHW4b44C2RLgWMG39ivtKN0taZwA7LzG" alt="weatherImage"/>
                <div className="weatherApp">
                    <h1 className="title">React weather app</h1>
                    <Form getWeather={fetchData} />
                    <Weather
                        city={weather.city}
                        country={weather.country}
                        description={weather.description}
                        temperature={weather.temperature}
                        error={weather.error}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
