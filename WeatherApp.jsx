import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 19.52,
        humidity : 30,
        temp : 20.62,
        tempMax : 21.05,
        tempMin : 20.62,
        weather : "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div>
            <h2>Weather App by Chaitali</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}