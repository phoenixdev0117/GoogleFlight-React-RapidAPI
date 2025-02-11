import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, useTheme } from '@mui/material';

export default function SelectTrip({ tripType, setTripType }) {
  const theme = useTheme(); // Access the current theme
  const tripOptions = [
    { value: 'Round trip', label: 'Round trip', mark: <svg enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" focusable="false" className="NMm5M hhikbc" fill={theme.palette.text.primary}><g><rect fill="none" height="24" width="24" x="0"></rect></g><g><g><polygon points="8.41,12.41 7,11 2,16 7,21 8.41,19.59 5.83,17 21,17 21,15 5.83,15"></polygon><polygon points="15.59,11.59 17,13 22,8 17,3 15.59,4.41 18.17,7 3,7 3,9 18.17,9"></polygon></g></g></svg> },
    { value: 'One way', label: 'One way', mark: <svg width="20" height="20" viewBox="0 0 24 24" focusable="false" className="NMm5M hhikbc"><path d="M16.79 7.79l-1.41 1.42L17.17 11H3v2h14.17l-1.79 1.79 1.41 1.42L21 12z" fill={theme.palette.text.primary}></path></svg> },
    { value: 'Multi-city', label: 'Multi-city', mark: <svg enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" focusable="false" className="NMm5M hhikbc" fill={theme.palette.text.primary}><g><path d="M11,8c0,0.55-0.45,1-1,1S9,8.55,9,8s0.45-1,1-1S11,7.45,11,8z M6,7C5.45,7,5,7.45,5,8s0.45,1,1,1s1-0.45,1-1S6.55,7,6,7z M14,17c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1s-1,0.45-1,1C13,16.55,13.45,17,14,17z M15.59,5.41L17.17,7L13,7v2l4.17,0l-1.59,1.59L17,12l4-4l-4-4L15.59,5.41z M8.41,18.59L6.83,17L11,17v-2l-4.17,0l1.59-1.59L7,12l-4,4l4,4L8.41,18.59z M18,17c0.55,0,1-0.45,1-1 c0-0.55-0.45-1-1-1s-1,0.45-1,1C17,16.55,17.45,17,18,17z"></path><rect fill="none" height="24" width="24"></rect></g></svg> },
  ];

  const handleChange = (event) => {
    setTripType(event.target.value);
  };

  return (
    <div className='w-1/3'>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={tripType}
          onChange={handleChange}
          displayEmpty
          renderValue={(value) => {
            return (
              <div className='flex gap-4'>
                {tripOptions.find(item => item.label === value)?.mark}
                <h2>{value}</h2>
              </div>
            )
          }}
          sx={{
            backgroundColor: theme.palette.background.paper, // Background color based on theme
            color: theme.palette.text.primary, // Text color based on theme
            fontSize: "14px",
            '& .MuiSelect-select': {
              padding: '10px 20px', // Adjust padding if needed
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover, // Change background on hover
            },
          }}
        >
          {tripOptions.map((option, index) => (
            <MenuItem key={index} value={option.value} sx={{ position: 'relative' }}>
              {tripType === option.value && <CheckIcon sx={{ position: "absolute" }} />}
              <Typography sx={{ marginLeft: "40px" }}>{option.label}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}