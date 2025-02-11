import { useState } from "react";
import "./effect.scss";
import Airport from "./Airport.json";
import CustomizedLocationPicker from "./CustomizedLocationPicker";
import SelectTrip from "./SelectTrip";
import SelectMemberCount from "./SelectMemberCount";
import SelectEconomy from "./SelectEconomy";
import GoogleDatePicker from "./GoogleDatePicker";
import { useTheme } from "@mui/material/styles";

const SkySearchForm = ({
  tripType,
  setTripType,

  cabinClass,
  setCabinClass,

  counts,
  setCounts,

  originLocation,
  setOriginLocation,

  destinationLocation,
  setDestinationLocation,

  date,
  setDate,

  returnDate,
  setReturnDate,
}) => {
  const theme = useTheme(); // Access the current theme
  const airports = Airport.airports; // Sample airport data
  // First input state
  const [filteredAirports1, setFilteredAirports1] = useState([]); // First input filtered airports
  // Second input state
  const [filteredAirports2, setFilteredAirports2] = useState([]); // Second input filtered airports
  const [isRotated, setIsRotated] = useState(false); // State for rotation
  // const [tripType, setTripType] = useState('Round trip'); // Default trip type
  // const [cabinClass, setcabinClass] = useState('Economy'); // Default economy type

  const handleRotateClick = () => {
    setIsRotated(!isRotated); // Toggle the rotation state
    let temp = originLocation;
    setOriginLocation(destinationLocation); // Swap the input values
    setDestinationLocation(temp); // Swap the input values
  };

  const handleInputChange1 = (e) => {
    const value = e.target.value;
    setOriginLocation(value);
    if (value) {
      const filtered = airports
        .filter((airport) =>
          airport.city.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5); // Limit to 5 results
      setFilteredAirports1(filtered);
    } else {
      setFilteredAirports1([]);
    }
  };

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    setDestinationLocation(value);
    if (value) {
      const filtered = airports
        .filter((airport) =>
          airport.city.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5); // Limit to 5 results
      setFilteredAirports2(filtered);
    } else {
      setFilteredAirports2([]);
    }
  };

  const handleAirportSelect1 = (airport) => {
    setOriginLocation(`${airport.city}, ${airport.country} (${airport.code})`); // Set the input value to the selected airport
    setFilteredAirports1([]); // Clear the dropdown
  };

  const handleAirportSelect2 = (airport) => {
    setDestinationLocation(
      `${airport.city}, ${airport.country} (${airport.code})`
    ); // Set the input value to the selected airport
    setFilteredAirports2([]); // Clear the dropdown
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full md:w-[736px] lg:w-[900px]"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: "20px 5px 30px 5px ",
        borderRadius: "8px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <div className="flex gap-4 w-full mb-4 items-center">
        <SelectTrip tripType={tripType} setTripType={setTripType} />
        <SelectMemberCount counts={counts} setCounts={setCounts} />
        <SelectEconomy cabinClass={cabinClass} setCabinClass={setCabinClass} />
      </div>
      <div className="flex md:flex-row flex-col w-full">
        <CustomizedLocationPicker
          originLocation={originLocation}
          handleInputChange1={handleInputChange1}
          filteredAirports1={filteredAirports1}
          handleAirportSelect1={handleAirportSelect1}
          destinationLocation={destinationLocation}
          handleInputChange2={handleInputChange2}
          filteredAirports2={filteredAirports2}
          handleAirportSelect2={handleAirportSelect2}
          isRotated={isRotated}
          handleRotateClick={handleRotateClick}
        />
        <GoogleDatePicker
          date={date}
          setDate={setDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
        />
      </div>
    </div>
  );
};

export default SkySearchForm;
