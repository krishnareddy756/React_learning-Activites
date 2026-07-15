import { useState } from "react";
import CitySelector from "./CitySelector";
import WeatherSummary from "./WeatherSummary";
import WeatherCard from "./WeatherCard";
import WeatherAlerts from "./WeatherAlerts";

export interface Weather {
  id: number;
  day: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
}

const cityData: Record<string, Weather[]> = {
  "New York": [
    {
      id: 1,
      day: "Monday",
      temperature: 72,
      condition: "Sunny",
      humidity: 45,
      windSpeed: 8,
      precipitation: 0,
    },
    {
      id: 2,
      day: "Tuesday",
      temperature: 68,
      condition: "Partly Cloudy",
      humidity: 50,
      windSpeed: 10,
      precipitation: 10,
    },
    {
      id: 3,
      day: "Wednesday",
      temperature: 75,
      condition: "Sunny",
      humidity: 40,
      windSpeed: 5,
      precipitation: 0,
    },
    {
      id: 4,
      day: "Thursday",
      temperature: 63,
      condition: "Rainy",
      humidity: 80,
      windSpeed: 15,
      precipitation: 70,
    },
    {
      id: 5,
      day: "Friday",
      temperature: 58,
      condition: "Thunderstorm",
      humidity: 85,
      windSpeed: 20,
      precipitation: 90,
    },
    {
      id: 6,
      day: "Saturday",
      temperature: 65,
      condition: "Cloudy",
      humidity: 60,
      windSpeed: 12,
      precipitation: 20,
    },
    {
      id: 7,
      day: "Sunday",
      temperature: 70,
      condition: "Sunny",
      humidity: 45,
      windSpeed: 7,
      precipitation: 0,
    },
  ],

  Chicago: [
    {
      id: 1,
      day: "Monday",
      temperature: 65,
      condition: "Cloudy",
      humidity: 60,
      windSpeed: 15,
      precipitation: 20,
    },
    {
      id: 2,
      day: "Tuesday",
      temperature: 67,
      condition: "Sunny",
      humidity: 45,
      windSpeed: 8,
      precipitation: 0,
    },
    {
      id: 3,
      day: "Wednesday",
      temperature: 71,
      condition: "Sunny",
      humidity: 40,
      windSpeed: 10,
      precipitation: 0,
    },
    {
      id: 4,
      day: "Thursday",
      temperature: 64,
      condition: "Rainy",
      humidity: 82,
      windSpeed: 18,
      precipitation: 80,
    },
    {
      id: 5,
      day: "Friday",
      temperature: 60,
      condition: "Rainy",
      humidity: 85,
      windSpeed: 20,
      precipitation: 90,
    },
    {
      id: 6,
      day: "Saturday",
      temperature: 66,
      condition: "Cloudy",
      humidity: 65,
      windSpeed: 12,
      precipitation: 20,
    },
    {
      id: 7,
      day: "Sunday",
      temperature: 69,
      condition: "Sunny",
      humidity: 50,
      windSpeed: 8,
      precipitation: 0,
    },
  ],

  "San Francisco": [
    {
      id: 1,
      day: "Monday",
      temperature: 62,
      condition: "Foggy",
      humidity: 85,
      windSpeed: 10,
      precipitation: 0,
    },
    {
      id: 2,
      day: "Tuesday",
      temperature: 64,
      condition: "Cloudy",
      humidity: 80,
      windSpeed: 12,
      precipitation: 10,
    },
    {
      id: 3,
      day: "Wednesday",
      temperature: 67,
      condition: "Sunny",
      humidity: 65,
      windSpeed: 12,
      precipitation: 0,
    },
    {
      id: 4,
      day: "Thursday",
      temperature: 67,
      condition: "Foggy",
      humidity: 80,
      windSpeed: 10,
      precipitation: 0,
    },
    {
      id: 5,
      day: "Friday",
      temperature: 65,
      condition: "Partly Cloudy",
      humidity: 75,
      windSpeed: 15,
      precipitation: 10,
    },
    {
      id: 6,
      day: "Saturday",
      temperature: 63,
      condition: "Cloudy",
      humidity: 80,
      windSpeed: 12,
      precipitation: 20,
    },
    {
      id: 7,
      day: "Sunday",
      temperature: 64,
      condition: "Foggy",
      humidity: 85,
      windSpeed: 8,
      precipitation: 0,
    },
  ],
};

function WeatherDashboard() {
  const [city, setCity] = useState("New York");
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const weather = cityData[city];

  return (
    <div className="container my-5">

      <CitySelector
        city={city}
        setCity={setCity}
      />

      <h2 className="text-center fw-bold mt-4">
        {city} 7-Day Weather Forecast
      </h2>

      <div className="text-center my-3">
        <button
          className="btn btn-primary"
          onClick={() =>
            setIsFahrenheit(!isFahrenheit)
          }
        >
          Switch to {isFahrenheit ? "°C" : "°F"}
        </button>
      </div>

      <WeatherSummary
        weather={weather}
      />

      <div className="row mt-4">

        {weather.map((item) => (
          <WeatherCard
            key={item.id}
            weather={item}
            isFahrenheit={isFahrenheit}
          />
        ))}

      </div>

      <WeatherAlerts weather={weather} />

    </div>
  );
}

export default WeatherDashboard;