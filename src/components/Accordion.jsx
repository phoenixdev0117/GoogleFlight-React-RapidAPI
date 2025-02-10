import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import {
  formatDate,
  formatDate2,
  calculateTimeDifference,
  getDateDiff,
  formatTimeManual,
  getWeight
} from '../action/date';

const LineBar = () => (
  <div className='xvIywb y52p7d'>
    <div className='T6Yut'></div>
    <div className='Vd4i6d'></div>
    <div className='T6Yut'></div>
  </div>
);

export default function AccordionExpandDefault({ props, tripType }) {
  const theme = useTheme();
  
  // Initialize expanded state as an array of false values
  const [expanded, setExpanded] = React.useState(Array(props.length).fill(false));

  const handleChange = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index]; // Toggle the specific accordion
      return newExpanded;
    });
  };

  return (
    <div className='flight-accordion-data' style={{ backgroundColor: theme.palette.background.default, width: "100%", marginBottom: "20px" }}>
      {props.map((prop, index) => (
        <Accordion
          key={index} // Always add a unique key for each item
          expanded={expanded[index]} // Use the expanded state for the specific index
          onChange={() => handleChange(index)} // Pass the index to handleChange
          sx={{ backgroundColor: theme.palette.background.default, border: "1px solid white" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id={`panel-${index}`}
            sx={{ backgroundColor: theme.palette.background.default, border: "0px solid white", borderBottomWidth: '1px' }}
          >
            <Box className='flex w-full justify-between pl-2 pr-8'>
              {
                prop.flag ? <img
                  src={prop.logo}
                  style={{ width: "35px", height: "35px", marginRight: '20px' }}
                  alt=""
                /> : <img
                  src={"https://www.gstatic.com/flights/airline_logos/70px/multi.png"}
                  style={{ width: "35px", height: "35px", marginRight: '20px' }}
                  alt=""
                />
              }
              <Box className='flex flex-col justify-between' style={{ width: "300px" }}>
                <Box className='flex'>
                  <Typography sx={{ fontSize: "16px" }}>{formatTimeManual(prop.legs[0].departure)} - {formatTimeManual(prop.legs[prop.legs.length - 1].arrival)}</Typography>
                  {getDateDiff(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure) ? <Typography sx={{ fontSize: "10px" }}>+{getDateDiff(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure)}</Typography> : ""}
                </Box>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>ANA · United</Typography>
              </Box>
              <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
                <Typography sx={{ fontSize: "16px" }}>{calculateTimeDifference(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure)}</Typography>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>JFK-HND</Typography>
              </Box>
              <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
                <Typography sx={{ fontSize: "16px" }}>{prop.legs.length - 1} stops</Typography>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>IAH, SEA</Typography>
              </Box>
              <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
                <Typography sx={{ fontSize: "16px" }}>{getWeight()} kg CO2e</Typography>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>
                  +22% emissions
                  <FontAwesomeIcon
                    icon={faInfo}
                    style={{
                      fontSize: "10px",
                      border: '1px solid',
                      borderRadius: "1000px",
                      width: '8px',
                      height: '8px',
                      marginLeft: '5px',
                    }}
                  />
                </Typography>
              </Box>
              <Box className='flex flex-col justify-between items-end'>
                <Typography sx={{ fontSize: "16px" }}>{prop.price}</Typography>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>{tripType}</Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: theme.palette.background.default }}>
            <Box className="flex">
              {
                prop.flag ? <div style={{ width: "35px", height: "35px", marginRight: '30px' }}></div> : <img
                  src={prop.logo}
                  style={{ width: "35px", height: "35px", marginRight: '30px' }}
                  alt=""
                />
              }
              <Box className="flex flex-col w-full mr-[1px]">
                {prop.legs.map((leg, legIndex) => (
                  <Box key={legIndex} sx={{ display: "flex", flexDirection: "column", marginLeft: "20px", width: "100%" }}>
                    <Typography sx={{ display: "flex" }}>{formatTimeManual(leg.departure)}{getDateDiff(prop.legs[legIndex].departure, prop.legs[0].departure) ? <span className='text-[12px]'>+{getDateDiff(prop.legs[legIndex].departure, prop.legs[0].departure)}</span> : ""} · {prop.legs[legIndex].origin}</Typography>
                    <Typography sx={{ fontSize: "14px", color: "#70757a", margin: "12px 0" }}>Travel time: {calculateTimeDifference(leg.arrival, leg.departure)}</Typography>
                    <Typography sx={{ display: "flex" }}>{formatTimeManual(leg.arrival)}{getDateDiff(prop.legs[legIndex].arrival, prop.legs[0].departure) ? <span className='text-[12px]'>+{getDateDiff(prop.legs[legIndex].arrival, prop.legs[0].departure)}</span> : ""} · {prop.legs[legIndex].destination}</Typography>
                    {legIndex !== prop.legs.length - 1 ? <Typography sx={{
                      fontSize: "14px",
                      margin: "20px 0",
                      border: "1px solid #dadce0",
                      borderLeft: "0px",
                      borderRight: "0px",
                      padding: "16px 24px 16px 0",
                      width: "100%",
                    }}>{calculateTimeDifference(prop.legs[legIndex + 1].departure, prop.legs[legIndex].arrival)} {prop.legs[legIndex].destination}</Typography> : <></>}
                  </Box>
                ))}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}