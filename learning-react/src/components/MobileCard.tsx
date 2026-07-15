import { useState } from "react";
import type { Mobile } from "./MobileList";

interface MobileCardProps {
  mobile: Mobile;
}

function MobileCard({ mobile }: MobileCardProps) {
  const [showDetails, setShowDetails] =
    useState<boolean>(false);

  function handleShowDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="col-md-5">

      <div className="card shadow h-100">

        <div className="card-body p-4">

          <h3 className="text-center mb-4">
            {mobile.name}
          </h3>

          <p className="fs-5">
            Price: {mobile.price.toLocaleString()}
          </p>

          {showDetails && (
            <div className="mt-4 fs-5">

              <p className="mb-1">
                RAM : {mobile.ram}
              </p>

              <p className="mb-1">
                camera : {mobile.camera}
              </p>

              <p className="mb-1">
                OS : {mobile.os}
              </p>

              <p className="mb-1">
                Processor : {mobile.processor}
              </p>

            </div>
          )}

          <button
            className="btn btn-success mt-4"
            onClick={handleShowDetails}
          >
            Show Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default MobileCard;