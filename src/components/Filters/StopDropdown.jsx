import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

export default function StopsDropdown({ value, onChange }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onChange("any");
  };

  const open = Boolean(anchorEl);
  const id = open ? "stops-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: "none",
          color: "inherit",
          borderColor: "rgb(229, 231, 235)",
          "&:hover": {
            borderColor: "rgb(209, 213, 219)",
            backgroundColor: "transparent"
          }
        }}
      >
        Stops
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPopover-paper": {
            width: 300,
            mt: 1,
            borderRadius: 1,
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          },
        }}
      >
        <Box sx={{ p: 0 }}>
          {/* Header */}
          <Box
            sx={{
              px: 3,
              py: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography 
              sx={{ 
                fontSize: '16px',
                fontWeight: 500,
                color: 'rgb(17, 24, 39)'
              }}
            >
              Stops
            </Typography>
            <IconButton
              size="small"
              onClick={handleClose}
              sx={{ 
                color: 'rgb(156, 163, 175)',
                p: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'rgb(107, 114, 128)'
                }
              }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={{ px: 3, pb: 3 }}>
            <RadioGroup
              value={value}
              onChange={handleChange}
              sx={{
                '& .MuiRadio-root': {
                  color: 'rgb(209, 213, 219)',
                  '&.Mui-checked': {
                    color: '#2563eb'
                  }
                },
                '& .MuiFormControlLabel-label': {
                  fontSize: '14px',
                  color: 'rgb(55, 65, 81)'
                }
              }}
            >
              <FormControlLabel 
                value="any" 
                control={<Radio />} 
                label="Any number of stops"
              />
              <FormControlLabel 
                value='0'
                control={<Radio />} 
                label="Nonstop only"
              />
              <FormControlLabel 
                value="1" 
                control={<Radio />} 
                label="1 stop or fewer"
              />
              <FormControlLabel 
                value="2" 
                control={<Radio />} 
                label="2 stops or fewer"
              />
            </RadioGroup>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              px: 3,
              py: 2,
              display: "flex",
              justifyContent: "flex-end",
              borderTop: '1px solid',
              borderColor: 'rgb(229, 231, 235)'
            }}
          >
            <Button
              onClick={handleClear}
              sx={{
                textTransform: "none",
                color: '#2563eb',
                minWidth: 'auto',
                padding: 0,
                fontSize: '14px',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              Clear
            </Button>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}