import type { Weather } from "./WeatherDashboard";

interface WeatherSummaryProps {
  weather: Weather[];
}

function WeatherSummary({
  weather,
}: WeatherSummaryProps) {

  const averageTemp =
    weather.reduce(
      (sum, day) => sum + day.temperature,
      0
    ) / weather.length;

  const hottestDay = weather.reduce((a, b) =>
    a.temperature > b.temperature ? a : b
  );

  const coldestDay = weather.reduce((a, b) =>
    a.temperature < b.temperature ? a : b
  );

  const sunnyDays = weather.filter(
    (x) => x.condition === "Sunny"
  ).length;

  const rainyDays = weather.filter(
    (x) =>
      x.condition === "Rainy" ||
      x.condition === "Thunderstorm"
  ).length;

  return (
    <div className="card mt-4 shadow">

      <div className="card-body">

        <h3 className="text-center mb-4">
          Week Overview
        </h3>

        <p>
          <strong>
            Average Temperature:
          </strong>{" "}
          {averageTemp.toFixed(1)}°F
        </p>

        <p>
          <strong>Hottest Day:</strong>{" "}
          {hottestDay.day} (
          {hottestDay.temperature}°F)
        </p>

        <p>
          <strong>Coldest Day:</strong>{" "}
          {coldestDay.day} (
          {coldestDay.temperature}°F)
        </p>

        <p>
          <strong>Sunny Days:</strong>{" "}
          {sunnyDays}
        </p>

        <p>
          <strong>Rainy Days:</strong>{" "}
          {rainyDays}
        </p>

      </div>

    </div>
  );
}

export default WeatherSummary;