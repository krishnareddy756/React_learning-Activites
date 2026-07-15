import type { Weather } from "./WeatherDashboard";

interface WeatherAlertsProps {
  weather: Weather[];
}

function WeatherAlerts({ weather }: WeatherAlertsProps) {
  const rainDays = weather.filter(
    (day) =>
      day.precipitation >= 50 ||
      day.condition === "Rainy" ||
      day.condition === "Thunderstorm"
  );

  const windyDays = weather.filter(
    (day) => day.windSpeed >= 15
  );

  const weekend = weather.filter(
    (day) =>
      day.day === "Saturday" ||
      day.day === "Sunday"
  );

  return (
    <>
      {/* Weekend Weather */}

      <div className="card shadow mt-4">

        <div className="card-body">

          <h3 className="mb-3">
            Weekend Weather
          </h3>

          {weekend.map((day) => (

            <div
              key={day.id}
              className="mb-3 border-bottom pb-2"
            >

              <h5>{day.day}</h5>

              <p>
                {day.temperature}°F | {day.condition}
              </p>

              {day.condition === "Sunny" && (
                <p className="text-success fw-bold">
                  Great for outdoor activities!
                </p>
              )}

              {(day.condition === "Cloudy" ||
                day.condition === "Partly Cloudy") && (
                <p className="text-primary fw-bold">
                  Nice weather for a walk.
                </p>
              )}

              {(day.condition === "Rainy" ||
                day.condition === "Thunderstorm") && (
                <p className="text-danger fw-bold">
                  Better to stay indoors.
                </p>
              )}

              {day.condition === "Foggy" && (
                <p className="text-warning fw-bold">
                  Drive carefully due to fog.
                </p>
              )}

            </div>

          ))}

        </div>

      </div>

      {/* Weather Alerts */}

      <div className="card shadow mt-4">

        <div className="card-body">

          <h3 className="mb-3">
            Weather Alerts
          </h3>

          {/* Rain Alert */}

          <div className="mb-4">

            <h5 className="text-primary">
              🌧 Rain Alert
            </h5>

            {rainDays.length > 0 ? (
              <p>
                Heavy rain expected on:{" "}
                {rainDays
                  .map((day) => day.day)
                  .join(", ")}
              </p>
            ) : (
              <p>No heavy rain expected.</p>
            )}

          </div>

          {/* Wind Alert */}

          <div>

            <h5 className="text-warning">
              🌬 Wind Advisory
            </h5>

            {windyDays.length > 0 ? (
              <p>
                Strong winds expected on:{" "}
                {windyDays
                  .map((day) => day.day)
                  .join(", ")}
              </p>
            ) : (
              <p>No strong winds expected.</p>
            )}

          </div>

        </div>

      </div>

    </>
  );
}

export default WeatherAlerts;