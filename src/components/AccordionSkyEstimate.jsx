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

export default function AccordionSkyEstimate({ prop, tripType }) {
  const theme = useTheme();

  return (
      <ul className='w-[240px]'>
        <li class="flex text-[12px] opacity-70 gap-2 mb-2">
          <div className='w-[14px] h-[14px]'><svg focusable="false" width="16" height="16" viewBox="0 0 24 24" class="qqxCKc NMm5M" aria-hidden="true"><circle cx="8.5" cy="4" r="2"></circle><path d="M5.03 7H2.99l2.28 11.39c.18.94 1 1.61 1.96 1.61H14v-2H7.23L5.03 7z"></path><path d="M18 15.4l-.23-.4c-.36-.62-1.02-1-1.73-1H13l-1.48-5.17a2.53 2.53 0 0 0-4.91 1.2l1.07 5.37c.19.93 1.01 1.6 1.96 1.6h6.97l2.89 5 1.73-1L18 15.4z"></path></svg></div>
          Extra reclining seat
        </li>
        <li class="flex text-[12px] opacity-70 gap-2 mb-2">
          <div className='w-[14px] h-[14px]'><svg focusable="false" width="16" height="16" viewBox="0 0 24 24" class="qqxCKc NMm5M" aria-hidden="true"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></svg></div>
          Wi-Fi for a fee
        </li>
        <li class="flex text-[12px] opacity-70 gap-2 mb-2">
          <div className='w-[14px] h-[14px]'><svg focusable="false" width="16" height="16" viewBox="0 0 24 24" class="qqxCKc NMm5M" aria-hidden="true"><path d="M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8m0-6h-2v4h-4V3H8v4h-.01C6.9 6.99 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.51V9c0-1.1-.9-2-2-2V3z"></path></svg></div>
          In-seat power &amp; USB outlets
        </li>
        <li class="flex text-[12px] opacity-70 gap-2 mb-2">
          <div className='w-[14px] h-[14px]'><svg focusable="false" width="16" height="16" viewBox="0 0 24 24" class="qqxCKc NMm5M" aria-hidden="true"><path d="M9 7v8l7-4z"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path></svg></div>
          On-demand video
        </li>
        <li class="flex text-[12px] opacity-70 gap-2 mb-2">
          <div className='w-[14px] h-[14px]'><svg focusable="false" width="16" height="16" viewBox="0 0 24 24" class="qqxCKc NMm5M" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"></path></svg></div>
          <div class="h6GTp">
            <span class="gI4d6d" aria-label="Carbon emissions estimate: 4,231 kilograms">
              Emissions estimate: 4,231 kg CO2e
            </span>
          </div>
        </li>
      </ul>
  );
}