import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

export default function DurationDropdown({ 
  value,              // Current value from parent
  onChange,           // Callback when value is committed
  min = 0,           // Minimum value
  max = 100,         // Maximum value
  step = 1           // Step size
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [localValue, setLocalValue] = useState(value); // Local state for smooth sliding

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // Reset local value to parent value when closing
    setLocalValue(value);
  };

  const handleClear = () => {
    setLocalValue(max);
    onChange(max);
  };

  // Handle continuous updates during sliding
  const handleSliderChange = (_, newValue) => {
    setLocalValue(newValue);
  };

  // Handle final value when sliding ends
  const handleSliderChangeCommitted = (_, newValue) => {
    onChange(newValue);
  };

  const open = Boolean(anchorEl);
  const id = open ? "duration-popover" : undefined;

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
          borderColor: "grey.300",
          "&:hover": {
            borderColor: "grey.400",
            backgroundColor: "transparent"
          }
        }}
      >
        Duration
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
          },
        }}
      >
        <Box sx={{ p: 0 }}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Typography variant="subtitle1">Duration</Typography>
            <IconButton
              size="small"
              onClick={handleClose}
              sx={{ color: "grey.500" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ p: 3 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Flight duration - {localValue} hr
            </Typography>
            <Box sx={{ px: 1 }}>
              <Slider
                value={localValue}
                min={min}
                max={max}
                step={step}
                onChange={handleSliderChange}
                onChangeCommitted={handleSliderChangeCommitted}
                sx={{
                  '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    border: '2px solid currentColor',
                  },
                  '& .MuiSlider-track': {
                    height: 4,
                  },
                  '& .MuiSlider-rail': {
                    height: 4,
                  },
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "flex-end",
              borderTop: 1,
              borderColor: "divider",
            }}
          >
            <Button
              onClick={handleClear}
              sx={{
                textTransform: "none",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "transparent",
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