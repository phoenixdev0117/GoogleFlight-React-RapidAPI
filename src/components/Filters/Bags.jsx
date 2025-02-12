import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, FormControlLabel, Switch } from "@mui/material";

export default function Airlines({
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

  const labelStyle = {
    fontSize: '14px',
    marginLeft: '4px'
  };

  const label_list = [
    "Air Canada",
    "Air China",
    "Air France",
    "Air India",
    "Alaska",
    "American",
    "ANA",
    "Asiana Airlines",
    "Austrian",
    "British Airways",
    "Cathay Pacific",
    "China Airlines",
    "China Eastern",
    "China Southern",
    "Delta",
    "Emirates",
    "Etihad",
    "EVA Air",
    "Finnair",
    "Hawaiian",
    "Iberia",
  ];

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
        Airlines
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
            }}
          >
            <Typography variant="subtitle1">Airlines</Typography>
            <IconButton
              size="small"
              onClick={handleClose}
              sx={{ color: "grey.500" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{
            p: 3,
            overflow: 'auto',
            height: '300px',
            border: "1px solid #ccc",
            borderLeft: "1px",
            borderRight: "1px",
          }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography
                variant="body2"
                sx={{ mb: 3, display: "flex", alignItems: "center", margin: "0px", fontSize: "16px" }}
              >
                Select all airlines
              </Typography>
              <Switch defaultChecked />
            </Box>

            <Box sx={{ padding: "0px", marginTop: "10px" }}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", fontSize: "14px", marginTop: "12px", marginBottom: "4px" }}
              >
                Alliances
              </Typography>
              <Box sx={{ paddingLeft: "8px", display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  label={<span style={labelStyle}>Oneworld</span>} // Apply inline label styles
                  control={<Checkbox />} // Apply inline checkbox styles
                />
                <FormControlLabel
                  label={<span style={labelStyle}>Skyteam</span>} // Apply inline label styles
                  control={<Checkbox />} // Apply inline checkbox styles
                />
                <FormControlLabel
                  label={<span style={labelStyle}>Star Alliance</span>} // Apply inline label styles
                  control={<Checkbox />} // Apply inline checkbox styles
                />
              </Box>
            </Box>

            <Box sx={{ padding: "0px", marginTop: "10px" }}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", fontSize: "14px", marginTop: "12px", marginBottom: "4px" }}
              >
                Airlines
              </Typography>
              <Box sx={{ paddingLeft: "0px", display: "flex", flexDirection: "column" }}>
                {label_list.map((label, index) =>
                  <Box key={index} className="checkbox-only-button-container" sx={{ paddingLeft: "8px", display: "flex", position: "relative", backgroundColor: "" }}>
                    <FormControlLabel
                      label={<span style={labelStyle}>{label}</span>} // Apply inline label styles
                      control={<Checkbox />} // Apply inline checkbox styles
                    />
                    <button className="checkbox-only-button duration-300">Only</button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "flex-end",
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