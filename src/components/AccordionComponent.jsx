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

export default function AccordionComponent({ prop, tripType }) {
  const theme = useTheme();

  return (
    <Typography> AccordionComponent </Typography>
  );
}

export function AccordionSummaryDesktopUnexpand({ prop, tripType }) {
  const theme = useTheme();

  return (
    <Box className='flex w-full justify-between pl-2 pr-8'>
      {/* sky logo */}
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

      {/* time of flight */}
      <Box className='flex flex-col justify-between lg:w-[300px] w-[200px]'>
        <Box className='flex'>
          <Typography sx={{ fontSize: "16px" }}>{formatTimeManual(prop.legs[0].departure)} - {formatTimeManual(prop.legs[prop.legs.length - 1].arrival)}</Typography>
          {getDateDiff(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure) ? <Typography sx={{ fontSize: "10px" }}>+{getDateDiff(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure)}</Typography> : ""}
        </Box>
        <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>ANA · United</Typography>
      </Box>

      {/* duration of flight */}
      <Box className='flex flex-col justify-between lg:w-[130px] w-[80px]'>
        <Typography className='md:truncate lg:text-ellipsis text-[16px]'>{calculateTimeDifference(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure)}</Typography>
        <Typography className='md:truncate lg:text-ellipsis text-[12px] opacity-70' sx={{ color: theme.palette.text.primary }}>JFK-HND</Typography>
      </Box>

      {/* stop count and location */}
      <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
        <Typography sx={{ fontSize: "16px" }}>{prop.legs.length - 1} stops</Typography>
        <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>IAH, SEA</Typography>
      </Box>

      {/* fuel amount and emissions */}
      <Box className='flex flex-col justify-between lg:w-[130px] w-[80px]'>
        <Typography className='md:truncate lg:text-ellipsis text-[16px]'>{getWeight()} kg CO2e</Typography>
        <Typography className='md:truncate lg:text-ellipsis text-[12px] opacity-70' sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>
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

      {/* price and trip type */}
      <Box className='flex flex-col justify-between items-end'>
        <Typography sx={{ fontSize: "16px" }}>{prop.price}</Typography>
        <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>{tripType}</Typography>
      </Box>
    </Box>
  );
}

export function AccordionSummaryDesktopExpand({ prop, tripType }) {
  const theme = useTheme();

  return (
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
      <Typography
        sx={{
          fontSize: "16px",
          color: theme.palette.text.primary,
          width: '400px',
          display: 'flex',
          alignItems: 'center',
          fontWeight: '700'
        }}
      >
        Departure · {formatDate2(prop.legs[0].departure.split("T")[0])}
      </Typography>
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
      <button className='w-[128px] h-[32px] rounded-full border-[1px] border-gray-400 bg-inherit text-[14px] text-[rgb(138,180,248)]'>Select flight</button>
      <Box className='flex flex-col justify-between items-end'>
        <Typography sx={{ fontSize: "16px" }}>{prop.price}</Typography>
        <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>{tripType}</Typography>
      </Box>
    </Box>
  );
}

export function AccordionDetailedDesktop({ prop }) {
  const theme = useTheme();

  return (
    <Box className="flex">
      {
        prop.flag ? <div style={{ width: "35px", height: "35px", marginRight: '30px' }}></div> : <img
          src={prop.logo}
          style={{ width: "35px", height: "35px", marginRight: '30px' }}
          alt=""
        />
      }
      <Box className="flex flex-col w-full mr-[1px]">
        {prop.legs.map((leg, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column", marginLeft: "20px", width: "100%" }}>
            <Typography sx={{ display: "flex" }}>{formatTimeManual(leg.departure)}{getDateDiff(prop.legs[index].departure, prop.legs[0].departure) ? <span className='text-[12px]'>+{getDateDiff(prop.legs[index].departure, prop.legs[0].departure)}</span> : ""} · {prop.legs[index].origin}</Typography>
            <Typography sx={{ fontSize: "14px", color: "#70757a", margin: "12px 0" }}>Travel time: {calculateTimeDifference(leg.arrival, leg.departure)}</Typography>
            <Typography sx={{ display: "flex" }}>{formatTimeManual(leg.arrival)}{getDateDiff(prop.legs[index].arrival, prop.legs[0].departure) ? <span className='text-[12px]'>+{getDateDiff(prop.legs[index].arrival, prop.legs[0].departure)}</span> : ""} · {prop.legs[index].destination}</Typography>
            {index != prop.legs.length - 1 ? <Typography sx={{
              fontSize: "14px",
              margin: "20px 0",
              border: "1px solid #dadce0",
              borderLeft: "0px",
              borderRight: "0px",
              padding: "16px 24px 16px 0",
              width: "100%",
            }}>{calculateTimeDifference(prop.legs[index + 1].departure, prop.legs[index].arrival)} {prop.legs[index].destination}</Typography> : <></>}
          </Box>
        ))}
      </Box>
    </Box>
  );
}