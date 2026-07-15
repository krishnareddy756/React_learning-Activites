import type { Weather } from "./WeatherDashboard";

interface WeatherCardProps {
  weather: Weather;
  isFahrenheit: boolean;
}

function WeatherCard({
  weather,
  isFahrenheit,
}: WeatherCardProps) {

  function convertToCelsius(temp: number) {
    return ((temp - 32) * 5 / 9).toFixed(1);
  }

  function getIcon(condition: string) {
    switch (condition) {
      case "Sunny":
        return "☀️";

      case "Cloudy":
        return "☁️";

      case "Partly Cloudy":
        return "⛅";

      case "Rainy":
        return "🌧️";

      case "Thunderstorm":
        return "⛈️";

      case "Foggy":
        return "🌫️";

      default:
        return "🌤️";
    }
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

      <div className="card h-100 shadow">

        <div className="card-body">

          <h5 className="fw-bold">
            {weather.day}
          </h5>

          <h2 className="text-primary">

            {isFahrenheit
              ? `${weather.temperature}°F`
              : `${convertToCelsius(weather.temperature)}°C`}

          </h2>

          <h1 className="text-center">
            {getIcon(weather.condition)}
          </h1>

          <h5>
            {weather.condition}
          </h5>

          <p>
            Humidity: {weather.humidity}%
          </p>

          <p>
            Wind: {weather.windSpeed} mph
          </p>

          {weather.precipitation > 0 && (
            <p className="text-info">
              Precipitation: {weather.precipitation}%
            </p>
          )}

          <hr />

          {weather.condition === "Sunny" && (
            <p className="text-success fw-bold">
              ☀️ Great day for outdoor activities!
            </p>
          )}

          {(weather.condition === "Rainy" ||
            weather.condition === "Thunderstorm") && (
            <p className="text-primary fw-bold">
              🌧️ Don't forget your umbrella!
            </p>
          )}

          {weather.windSpeed >= 15 && (
            <p className="text-danger fw-bold">
              🌬️ High winds expected!
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default WeatherCard;