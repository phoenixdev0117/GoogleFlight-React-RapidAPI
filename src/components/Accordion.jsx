import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummaryDesktopUnexpand, AccordionSummaryDesktopExpand, AccordionDetailedDesktop, AccordionSummaryMobileUnexpand } from './AccordionComponent';

export default function AccordionExpandDefault({ props, tripType }) {
  const theme = useTheme();

  // State to track the currently expanded accordion index
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleChange = (index) => {
    // Toggle the accordion: if the same index is clicked, close it; otherwise, open the new one
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='flight-accordion-data' style={{ backgroundColor: theme.palette.background.default, width: "100%", marginBottom: "20px" }}>
      {props.map((prop, index) => (
        <Accordion
          key={index} // Always add a unique key for each item
          expanded={expandedIndex === index} // Check if this index is the currently expanded one
          onChange={() => handleChange(index)} // Pass the index to handleChange
          className='md:block hidden'
          sx={{ backgroundColor: theme.palette.background.default, border: "1px solid white" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id={`panel-${index}`}
            sx={{ backgroundColor: theme.palette.background.default, border: "0px solid white", borderBottomWidth: '1px' }}
          >
            {expandedIndex !== index ? (
              <AccordionSummaryDesktopUnexpand prop={prop} tripType={tripType} />
            ) : (
              <AccordionSummaryDesktopExpand prop={prop} tripType={tripType} />
            )}
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: theme.palette.background.default, padding: "0px" }}>
            <AccordionDetailedDesktop prop={prop} />
          </AccordionDetails>
        </Accordion>
      ))}
      {props.map((prop, index) => (
        <AccordionSummaryMobileUnexpand prop={prop} tripType={tripType}>

        </AccordionSummaryMobileUnexpand>
      ))}
    </div>
  );
}