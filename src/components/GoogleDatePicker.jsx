import * as React from "react";
import { Typography, useTheme } from "@mui/material";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import "./effect.scss";

export default function GoogleDatePicker({
  date,
  setDate,
  returnDate,
  setReturnDate,
}) {
  const theme = useTheme(); // Access the current theme

  const onDateChange = (startDate, endDate) => {
    setDate(startDate);
    setReturnDate(endDate);
  };

  return (
    <div className={`w-1/2 ${theme.palette.mode}-date-theme`}>
      <RangeDatePicker
        startDate={date}
        endDate={returnDate}
        expandDirection="left"
        onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
      />
    </div>
  );
}
