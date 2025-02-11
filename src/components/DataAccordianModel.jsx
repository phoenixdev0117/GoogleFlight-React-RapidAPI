import * as React from "react";
import { Typography, useTheme } from "@mui/material";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import "./effect.scss";
import AccordionExpandIcon from "./Accordion";

export default function DataAccordianModel({tripType}) {
  const theme = useTheme(); // Access the current theme

  const data = [
    {
      price:"$1551",
      legs:[
        {
          arrival:"2025-03-11T09:30:00",
          departure: "2025-03-10T08:45:00",
          destination: "Berlin Brandenburg Airport (BER)",
          origin: "New York John F. Kennedy Airport (JFK)"
        },
        {
          arrival:"2025-03-16T18:35:00",
          departure: "2025-03-15T18:15:00",
          destination: "New York Newark Airport (EWR)",
          origin: "Berlin Brandenburg Airport (BER)"
        }
      ],
      logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png",
      flag: true,
    },
    {
      price:"$551",
      legs:[
        {
          arrival:"2025-03-11T21:30:00",
          departure: "2025-03-10T18:45:00",
          destination: "Berlin Brandenburg Airport (BER)",
          origin: "New York John F. Kennedy Airport (JFK)",
          logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
        },
        {
          arrival:"2025-03-16T14:35:00",
          departure: "2025-03-15T08:15:00",
          destination: "New York Newark Airport (EWR)",
          origin: "Berlin Brandenburg Airport (BER)",
          logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
        }
      ],
      logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
    }
    ,
    {
      price:"$551",
      legs:[
        {
          arrival:"2025-03-11T21:30:00",
          departure: "2025-03-10T18:45:00",
          destination: "Berlin Brandenburg Airport (BER)",
          origin: "New York John F. Kennedy Airport (JFK)",
          logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
        },
        {
          arrival:"2025-03-16T14:35:00",
          departure: "2025-03-15T08:15:00",
          destination: "New York Newark Airport (EWR)",
          origin: "Berlin Brandenburg Airport (BER)",
          logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
        }
      ],
      logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
    }
    ,
    {
      price:"$551",
      legs:[
        {
          arrival:"2025-03-11T21:30:00",
          departure: "2025-03-10T18:45:00",
          destination: "Berlin Brandenburg Airport (BER)",
          origin: "New York John F. Kennedy Airport (JFK)",
          logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
        },
        {
          arrival:"2025-03-16T14:35:00",
          departure: "2025-03-15T08:15:00",
          destination: "New York Newark Airport (EWR)",
          origin: "Berlin Brandenburg Airport (BER)",
          logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
        }
      ],
      logo:"https://logos.skyscnr.com/images/airlines/favicon/SK.png"
    }
  ]

  return (
    <div className={`w-11/12 md:w-[736px] lg:w-[900px] ${theme.palette.mode}-date-theme`}>
      <AccordionExpandIcon props={data} tripType={tripType} />
    </div>
  );
}
