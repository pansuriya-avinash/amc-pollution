import React, { useState } from "react";
import { locationData } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const PollutionBox = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handelMap = (la: any, lo: any) => {
    navigate("/map", { state: { latitude: la, longitude: lo } });
  };
  const handelsearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="card-search">
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control search-input"
            placeholder="Search location..."
            onChange={(e) => handelsearch(e)}
          />
          {/* <label className="form-label search-btn" htmlFor="form1">
            Search
          </label> */}
        </div>
      </div>

      <div className="card-section ">
        {
        locationData.filter((obj) => JSON.stringify(obj).toLowerCase().includes(search.toString().toLowerCase())).map((value, index) => (
          <div className="card-div" key={index}>
            <div className="card-wrapper">
              <div className="card-header flex align-items--center justify-content--between">
                <h6 className="card-tittle">{value.location}</h6>
                <div
                  className="card-icon flex align-items--center justify-content--center"
                  onClick={() => handelMap(value.latitude, value.longitude)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
              </div>
              <div className="sensor-location flex align-items--center">
                <p> &#x2022;{value.sensor_type}</p>
                <p> &#x2022;{value.sensor_name}</p>
              </div>
              <div className="card-description-wrapper ">
                <div className="card-description flex align-items--center justify-content--between">
                  <h6>
                    PM<sub>2.5</sub>
                  </h6>
                  <p>{value.pm25}</p>
                </div>
                <div
                  className={`card-description flex align-items--center justify-content--between ${
                    value.severity === "Good"
                      ? "card-green"
                      : value.severity === "Moderate"
                      ? "card-yello"
                      : "card-red"
                  }`}
                >
                  <h6>
                    CO<sub>2</sub>
                  </h6>
                  <p>{value.co}</p>
                </div>
                <div className="card-description flex align-items--center justify-content--between">
                  <h6>Temperature</h6>
                  <p>{value.temperature}</p>
                </div>
                <div className="card-description flex align-items--center justify-content--between">
                  <h6>Installation Date</h6>
                  <p>{value.installation_date}</p>
                </div>
                <div
                  className={`card-description ${
                    value.severity === "Good"
                      ? "card-green"
                      : value.severity === "Moderate"
                      ? "card-yello"
                      : "card-red"
                  }`}
                >
                  <h6>{value.severity}</h6>
                </div>
                <div className="card-description">
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollutionBox;
