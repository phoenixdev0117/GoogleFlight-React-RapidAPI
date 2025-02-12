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
import AccordionSkyEstimate from './AccordionSkyEstimate';

import LegsImg from './LegsImg';
import { useState } from 'react';


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
        <Typography
          className='md:truncate lg:text-ellipsis opacity-70'
          sx={{ color: theme.palette.text.primary, fontSize: "12px" }}
        >
          JFK-HND
        </Typography>
      </Box>

      {/* stop count and location */}
      <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
        <Typography sx={{ fontSize: "16px" }}>{prop.legs.length - 1} stops</Typography>
        <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>IAH, SEA</Typography>
      </Box>

      {/* fuel amount and emissions */}
      <Box className='flex flex-col justify-between lg:w-[130px] w-[80px]'>
        <Typography className='md:truncate lg:text-ellipsis text-[16px]'>{prop.flue} kg CO2e</Typography>
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

      <Typography className='lg:w-[400px] md:w-[200px]'
        sx={{
          fontSize: "16px",
          color: theme.palette.text.primary,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Departure · {formatDate2(prop.legs[0].departure.split("T")[0])}
      </Typography>
      <Box className='flex flex-col justify-between lg:w-[130px] w-[110px]'>
        <Typography sx={{ fontSize: "16px" }}>{prop.flue} kg CO2e</Typography>
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
    <div className="flex flex-col w-full mr-[1px] border-t-[1px] py-2">
      {prop.legs.map((leg, index) => (
        <div className='grid grid-flow-col grid-cols-[80px_20px_auto_auto] grid-rows-[auto_40px_auto_60px_auto] pt-2'>
          {
            prop.flag ? <div className='row-span-3 my-auto w-[35px] h-[35px] mx-[30px]'></div> :
              <img src={leg.logo} className='row-span-3 my-auto w-[35px] h-[35px] mx-[30px]' alt="" />
          }
          <div></div>
          <div></div>
          <div className="row-span-3 py-1">
            <LegsImg />
          </div>
          <div></div>
          <div></div>
          <Typography sx={{ alignItems: "center", display: "flex" }}>{formatTimeManual(leg.departure)}{getDateDiff(prop.legs[index].departure, prop.legs[0].departure) ? <span className='text-[12px] h-full flex items-start pt-1'>+{getDateDiff(prop.legs[index].departure, prop.legs[0].departure)}</span> : ""} · {prop.legs[index].origin}</Typography>
          <Typography sx={{ alignItems: "center", display: "flex", fontSize: "14px", color: "#70757a", margin: "12px 0" }}>Travel time: {calculateTimeDifference(leg.arrival, leg.departure)}</Typography>
          <Typography sx={{ alignItems: "end", display: "flex" }}>{formatTimeManual(leg.arrival)}{getDateDiff(prop.legs[index].arrival, prop.legs[0].departure) ? <span className='text-[12px] h-full flex items-center'>+{getDateDiff(prop.legs[index].arrival, prop.legs[0].departure)}</span> : ""} · {prop.legs[index].destination}</Typography>
          <Typography sx={{ alignItems: "end", display: "flex", fontSize: "12px", color: "#70757a", margin: "12px 0" }}>JAL · Premium Economy · Boeing 777 · JL 2</Typography>
          {index != prop.legs.length - 1 ?
            <Typography
              className='col-span-2'
              sx={{
                fontSize: "14px",
                margin: "10px 0",
                border: "1px solid #dadce0",
                borderLeft: "0px",
                borderRight: "0px",
                padding: "16px 24px 16px 0",
                width: "100%",
              }}>{calculateTimeDifference(prop.legs[index + 1].departure, prop.legs[index].arrival)} {prop.legs[index].destination}</Typography> : <></>}
          {index == prop.legs.length - 1 ?
            <Typography
              className='col-span-2'
              sx={{
                fontSize: "12px",
                margin: "10px 0 0",
                padding: "16px 24px 16px 0",
                width: "100%",
                color: "#70757a"
              }}>1 checked bag up to 23 kg included · Fare non-refundable, taxes may be refundable · Free change, possible fare difference<br />
              Bag and fare conditions depend on the return flight</Typography> : <></>}
          <div className='flex row-span-3 justify-end'>
            <AccordionSkyEstimate className="" flue={prop.flue} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AccordionSummaryMobileUnexpand({ prop, tripType }) {
  const theme = useTheme();
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked); // Toggle the click state
    console.log(isClicked);
  };

  return (
    <Box className='flex w-full md:hidden py-4 border-[1px] border-gray-300 rounded-t-md duration-300'>
      {/* sky logo */}
      {
        isClicked ? <></> : prop.flag ? <img
          src={prop.logo}
          style={{ width: "35px", height: "35px", marginRight: '20px', marginLeft: '20px' }}
          alt=""
        /> : <img
          src={"https://www.gstatic.com/flights/airline_logos/70px/multi.png"}
          style={{ width: "35px", height: "35px", marginRight: '20px', marginLeft: '20px' }}
          alt=""
        />
      }

      <Box className="flex w-full justify-between relative">
        <Box className={`${isClicked ? "hidden" : "flex flex-col"}`}>

          {/* time of flight */}
          <Box className='flex lg:w-[300px] w-[200px]'>
            <Box className="flex flex-col">
              <Typography sx={{ fontSize: "16px" }}>{formatTimeManual(prop.legs[0].departure)}</Typography>
              <Typography sx={{ fontSize: "12px", opacity: '0.7' }}>HND</Typography>
            </Box>

            <img src={"//www.gstatic.com/flights/app/2x/arrow_0.png"} className='w-[32px] h-[16px] mt-1' />

            <Box className="flex flex-col">
              <Typography sx={{ fontSize: "16px" }}>{formatTimeManual(prop.legs[prop.legs.length - 1].arrival)}</Typography>
              <Typography sx={{ fontSize: "12px", opacity: '0.7' }}>JFK</Typography>
            </Box>
            {getDateDiff(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure) ? <Typography sx={{ fontSize: "10px" }}>+{getDateDiff(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure)}</Typography> : ""}
          </Box>

          <Typography sx={{ fontSize: "12px", opacity: '0.7', marginTop: "10px", display: "flex" }}>
            <Typography sx={{ fontSize: "12px" }}>
              {prop.legs.length == 1 ? 'Nonstop' :
                prop.legs.length == 2 ? '1stop' : prop.legs.length - 1 + 'stops'
              }
            </Typography> &nbsp;·&nbsp;
            {calculateTimeDifference(prop.legs[prop.legs.length - 1].arrival, prop.legs[0].departure)} &nbsp;·&nbsp;
            JAL &nbsp;·&nbsp;
            American
          </Typography>
        </Box>

        <div className={`w-full mr-[1px] py-4 ${isClicked ? "flex flex-col" : "hidden"}`}>
          {prop.legs.map((leg, index) => (
            <Box className="flex" key={index}>
              {
                prop.flag ? <img
                  src={prop.logo}
                  style={{ width: "35px", height: "35px", marginLeft: '20px' }}
                  alt=""
                /> : <img
                  src={leg.logo}
                  style={{ width: "35px", height: "35px", marginLeft: '20px' }}
                  alt=""
                />
              }
              <Box key={index} sx={{ display: "flex", flexDirection: "column", marginLeft: "20px", width: "100%" }}>
                <Box className={`${index == 0 ? 'pr-16' : ''}`} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className='grid grid-flow-col grid-cols-[20px_auto] grid-rows-[auto_auto_40px_auto_auto]'>
                    <div className="row-span-4">
                      <LegsImg />
                    </div>
                    <div className='w-[10px]'></div>
                    <Typography sx={{ display: "flex" }}>{formatTimeManual(leg.departure)}{getDateDiff(prop.legs[index].departure, prop.legs[0].departure) ? <span className='text-[12px]'>+{getDateDiff(prop.legs[index].departure, prop.legs[0].departure)}</span> : ""}</Typography>
                    <Typography sx={{ fontSize: "12px" }}>{prop.legs[index].origin}</Typography>
                    <Typography className='flex items-center' sx={{ fontSize: "12px", color: "#70757a" }}>Travel time: {calculateTimeDifference(leg.arrival, leg.departure)}</Typography>
                    <Typography sx={{ display: "flex" }}>{formatTimeManual(leg.arrival)}{getDateDiff(prop.legs[index].arrival, prop.legs[0].departure) ? <span className='text-[12px]'>+{getDateDiff(prop.legs[index].arrival, prop.legs[0].departure)}</span> : ""}</Typography>
                    <Typography sx={{ fontSize: "12px" }}>{prop.legs[index].destination}</Typography>
                  </div>
                  <Typography sx={{ fontSize: "12px", color: "#70757a", margin: "12px 0" }}>JAL · Premium Economy · Boeing 777 · JL 2</Typography>
                  <AccordionSkyEstimate />
                </Box>
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
            </Box>
          ))}
        </div>

        {/* price of flight */}
        <Box className="flex flex-col items-end gap-1 absolute top-0 right-16">
          <Typography sx={{ fontSize: "16px" }}>{prop.price}</Typography>
          <Typography sx={{ fontSize: "12px", opacity: "0.7" }}>{tripType}</Typography>
          <Box className={`${isClicked ? "hidden" : "flex items-center"}`} sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>
            <Typography sx={{ fontSize: "12px", backgroundColor: "rgb(230, 255, 234)", color: "#0d652d", paddingX: "4px" }}>+22% emissions</Typography>
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
          </Box>
        </Box>

        <button className={`absolute top-0 right-4 hover:bg-gray-100 w-[40px] h-[40px] flex justify-center items-center rounded-full accordion-button-select duration-200 ${isClicked ? 'rotate-180' : 'rotate-0'}`} onClick={handleButtonClick}>
          <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className="SadNne NMm5M"><path d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z"></path></svg>
        </button>

        <button className={`absolute top-16 right-4 w-[128px] h-[32px] rounded-full border-[1px] border-gray-400 bg-inherit text-[14px] text-[rgb(138,180,248)] duration-300 ${isClicked ? 'block' : 'hidden'}`}>Select flight</button>
      </Box>

    </Box>
  );
}