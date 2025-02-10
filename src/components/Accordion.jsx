import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

export default function AccordionExpandDefault({ props }) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ backgroundColor: theme.palette.background.default, width: "100%" }}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{ backgroundColor: theme.palette.background.default, border: "1px solid white" }}
      >
        {!expanded ?
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: theme.palette.background.default, border: "0px solid white", borderBottomWidth: '1px' }}
          >
            <Box className='flex w-full justify-between pl-2 pr-8'>
              <img
                src={props[0].icon}
                style={{ width: "35px", height: "35px", marginRight: '20px' }}
                alt="Placeholder"
              />
              <Box className='flex flex-col justify-between' style={{ width: "300px" }}>
                <Box className='flex'>
                  <Typography sx={{ fontSize: "16px" }}>2:05 PM - 5:40 PM</Typography>
                  <Typography sx={{ fontSize: "10px" }}>+1</Typography>
                </Box>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>ANA · United</Typography>
              </Box>
              <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
                <Typography sx={{ fontSize: "16px" }}>14 hr 35 min</Typography>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>JFK-HND</Typography>
              </Box>
              <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
                <Typography sx={{ fontSize: "16px" }}>2 stops</Typography>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>IAH, SEA</Typography>
              </Box>
              <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
                <Typography sx={{ fontSize: "16px" }}>7,891 kg CO2e</Typography>
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
                <Typography sx={{ fontSize: "16px" }}>RUB 1,892,412</Typography>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>round trip</Typography>
              </Box>
            </Box>
          </AccordionSummary> :
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: theme.palette.background.default, border: "0px solid white", borderBottomWidth: '1px' }}
          >
            <Box className='flex w-full justify-between pl-2 pr-8'>
              <img
                src={props[0].icon}
                style={{ width: "35px", height: "35px", marginRight: '20px' }}
                alt="Placeholder"
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.text.primary,
                  width: '400px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Departure · Sat, Mar 22
              </Typography>
              <Box className='flex flex-col justify-between' style={{ width: "130px" }}>
                <Typography sx={{ fontSize: "16px" }}>7,891 kg CO2e</Typography>
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
                <Typography sx={{ fontSize: "16px" }}>RUB 1,892,412</Typography>
                <Typography sx={{ fontSize: "12px", color: theme.palette.text.primary, opacity: '0.7' }}>round trip</Typography>
              </Box>
            </Box>
          </AccordionSummary>
        }
        <AccordionDetails sx={{ backgroundColor: theme.palette.background.default }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}