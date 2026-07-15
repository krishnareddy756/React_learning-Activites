import MobileCard from "./MobileCard";

export interface Mobile {
  id: number;
  name: string;
  price: number;
  ram: string;
  camera: string;
  os: string;
  processor: string;
}

function MobileList() {
  const mobiles: Mobile[] = [
    {
      id: 1,
      name: "Google Pixel 2 XL",
      price: 62000,
      ram: "4 GB",
      camera: "12.2 MP",
      os: "Android Pie",
      processor: "Snapdragon 835 octa-core",
    },
    {
      id: 2,
      name: "Apple Iphone x",
      price: 98000,
      ram: "3 GB",
      camera: "12 MP",
      os: "iOS",
      processor: "Apple A11 Bionic",
    },
  ];

  return (
    <div className="container mt-5">

      <div className="row justify-content-center g-4">

        {mobiles.map((mobile) => (
          <MobileCard
            key={mobile.id}
            mobile={mobile}
          />
        ))}

      </div>

    </div>
  );
}

export default MobileList;