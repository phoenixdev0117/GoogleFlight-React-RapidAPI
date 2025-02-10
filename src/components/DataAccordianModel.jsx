import * as React from "react";
import { Typography, useTheme } from "@mui/material";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import "./effect.scss";
import AccordionExpandIcon from "./Accordion";

export default function DataAccordianModel() {
  const theme = useTheme(); // Access the current theme

  return (
    <div className={`w-1/2 ${theme.palette.mode}-date-theme`}>
      <AccordionExpandIcon />
    </div>
  );
}
