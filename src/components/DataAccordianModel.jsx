import * as React from "react";
import { Typography, useTheme } from "@mui/material";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import "./effect.scss";
import AccordionExpandIcon from "./Accordion";

export default function DataAccordianModel() {
  const theme = useTheme(); // Access the current theme

  const data = [
    {
      icon: "https://www.gstatic.com/flights/airline_logos/70px/dark/BR.png"
    }
  ];

  return (
    <div className={`w-[1000px] ${theme.palette.mode}-date-theme`}>
      <AccordionExpandIcon props={data} />
    </div>
  );
}
