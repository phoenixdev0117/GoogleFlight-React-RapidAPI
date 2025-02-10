import React from 'react';
import { Typography, useTheme } from '@mui/material';

const CustomizedLocationPicker = ({
  originLocation,
  handleInputChange1,
  filteredAirports1,
  handleAirportSelect1,
  destinationLocation,
  handleInputChange2,
  filteredAirports2,
  handleAirportSelect2,
  isRotated,
  handleRotateClick,
}) => {
  const theme = useTheme(); // Access the current theme

  return (
    <div className="flex justify-center items-center w-1/2">
      {/* First Input */}
      <div className="w-1/2 h-[56px] relative overflow-hidden input-location-container" style={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary }}>
        <input
          className="w-full h-full border-2 rounded-md text-[16px] input-location-button outline-none px-8"
          value={originLocation}
          onChange={handleInputChange1}
          placeholder="Enter airport city"
          style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
        />
        <span className="absolute top-[10px] w-[36px] h-[36px] right-[-22px] input-location-span rounded-full border-2 bg-white" />
        <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[15px]">
          <path fill={theme.palette.text.primary} d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
        </svg>
      </div>
      {/* Dropdown for filtered airports for first input */}
      {filteredAirports1.length > 0 && (
        <div className="absolute z-10 bg-white border border-gray-300 w-1/2 mt-[270px] rounded-md shadow-lg" style={{ backgroundColor: theme.palette.background.default }}>
          {filteredAirports1.map((airport, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleAirportSelect1(airport)}
            >
              <Typography variant="body2" style={{ color: theme.palette.text.primary }}>
                {airport.city}, {airport.country} ({airport.code})
              </Typography>
            </div>
          ))}
        </div>
      )}
      <div className="relative">
        <button
          className="w-[34px] h-[34px] mx-[-13px] my-[11px] rounded-full input-location-middle relative"
          onClick={handleRotateClick}
          style={{
            backgroundColor: theme.palette.background.default,
            transition: 'transform 0.1s ease',
            transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" className="input-location-middle-icon">
            <path fill={theme.palette.text.primary} d="M17 4l-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"></path>
          </svg>
        </button>
      </div>
      {/* Second Input */}
      <div className="w-1/2 h-[56px] relative overflow-hidden input-location-container" style={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary }}>
        <input
          className="w-full h-full border-2 rounded-md text-[16px] input-location-button outline-none px-10"
          value={destinationLocation}
          onChange={handleInputChange2}
          placeholder="Enter airport city"
          style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
        />
        <span className="absolute top-[10px] w-[36px] h-[36px] left-[-22px] input-location-span rounded-full border-2 bg-white" />
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[25px]">
          <path fill={theme.palette.text.primary} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
          <circle cx="12" cy="9" r="2.5"></circle>
        </svg>
      </div>
      {/* Dropdown for filtered airports for second input */}
      {filteredAirports2.length > 0 && (
        <div className={`absolute z-10 border border-gray-300 w-1/2 mt-[270px] rounded-md shadow-lg`} style={{ backgroundColor: theme.palette.background.default }}>
          {filteredAirports2.map((airport, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleAirportSelect2(airport)}
            >
              <Typography variant="body2" style={{ color: theme.palette.text.primary }}>
                {airport.city}, {airport.country} ({airport.code})
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomizedLocationPicker;