interface CitySelectorProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

function CitySelector({
  city,
  setCity,
}: CitySelectorProps) {
  const cities = [
    "New York",
    "Chicago",
    "San Francisco",
  ];

  return (
    <div className="text-center">

      <h4 className="mb-3">
        Select a City
      </h4>

      <div className="btn-group">

        {cities.map((c) => (

          <button
            key={c}
            className={`btn ${
              city === c
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setCity(c)}
          >
            {c}
          </button>

        ))}

      </div>

    </div>
  );
}

export default CitySelector;