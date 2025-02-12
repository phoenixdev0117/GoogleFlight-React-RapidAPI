import React, { useState } from "react";
import {
  Box,
  Button,
  Popover,
  Tabs,
  Tab,
  Typography,
  Slider,
  Tooltip,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function TimeSelection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabValue, setTabValue] = useState(0); // 0 for Outbound, 1 for Return

  // Separate state for each slider
  const [outboundDeparture, setOutboundDeparture] = useState([0, 24]);
  const [outboundArrival, setOutboundArrival] = useState([0, 24]);
  const [returnDeparture, setReturnDeparture] = useState([0, 24]);
  const [returnArrival, setReturnArrival] = useState([0, 24]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handlers for outbound sliders
  const handleOutboundDepartureChange = (event, newValue) => {
    setOutboundDeparture(newValue);
  };

  const handleOutboundArrivalChange = (event, newValue) => {
    setOutboundArrival(newValue);
  };

  // Handlers for return sliders
  const handleReturnDepartureChange = (event, newValue) => {
    setReturnDeparture(newValue);
  };

  const handleReturnArrivalChange = (event, newValue) => {
    setReturnArrival(newValue);
  };

  const handleClearClick = () => {
    setOutboundDeparture([0,24]);
    setOutboundArrival([0,24]);
    setReturnDeparture([0,24]);
    setReturnArrival([0,24]);
  }

  const open = Boolean(anchorEl);
  const id = open ? "time-selection-popover" : undefined;

  // Custom tooltip component for the slider
  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    // Format the value to a time string (e.g., "4:00 PM")
    const hours = Math.floor(value);
    const minutes = (value % 1) * 60;
    const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;

    return (
      <Tooltip open={open} arrow title={formattedTime} sx={{
        backgroundColor: 'rgb(26,115,232)',
        color: 'white',
        borderRadius: '9999px', // Fully rounded
        padding: '4px 8px', // Add some padding
      }}>
        {children}
      </Tooltip>
    );
  }

  return (
    <div>
      <Button onClick={handleClick} variant="outlined">
        Times
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
            <Typography variant="subtitle1">Times</Typography>
            <IconButton
              size="small"
              onClick={handleClose}
              sx={{ color: "grey.500" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "start", borderBottom: "1px solid gray" }}>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Outbound" />
              <Tab label="Return" />
            </Tabs>
          </Box>
          {tabValue === 0 && (
            <Box sx={{ mt: 2, px: 4 }}>
              <Typography color="text.secondary" sx={{ fontSize: "14px", marginBottom: "32px" }}>Paris to New York</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg fill="rgb(128,134,139)" width="24" height="24" viewBox="0 0 24 24" focusable="false" className=" NMm5M hhikbc"><path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></svg>
                <Typography color="text.secondary" sx={{ fontSize: "12px" }}>Departure · Anytime</Typography>
              </Box>
              <Slider
                value={outboundDeparture}
                onChange={handleOutboundDepartureChange}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={24}
                components={{
                  ValueLabel: ValueLabelComponent, // Use custom tooltip
                }}
                sx={{ mt: 2 }}
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "24px" }}>
                <svg fill="rgb(128,134,139)" width="24" height="24" viewBox="0 0 24 24" focusable="false" className=" NMm5M hhikbc"><path d="M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l16.57 4.44z"></path></svg>
                <Typography color="text.secondary" sx={{ fontSize: "12px" }}>Arrival · Anytime</Typography>
              </Box>
              <Slider
                value={outboundArrival}
                onChange={handleOutboundArrivalChange}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={24}
                components={{
                  ValueLabel: ValueLabelComponent, // Use custom tooltip
                }}
                sx={{ mt: 2 }}
              />
            </Box>
          )}
          {tabValue === 1 && (
            <Box sx={{ mt: 2, px: 4 }}>
              <Typography color="text.secondary" sx={{ fontSize: "14px", marginBottom: "32px" }}>New York to Paris</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg fill="rgb(128,134,139)" width="24" height="24" viewBox="0 0 24 24" focusable="false" style={{ transform: "rotateY(180deg)" }}><path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></svg>
                <Typography color="text.secondary" sx={{ fontSize: "12px" }}>Departure · Anytime</Typography>
              </Box>
              <Slider
                value={returnDeparture}
                onChange={handleReturnDepartureChange}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={24}
                components={{
                  ValueLabel: ValueLabelComponent, // Use custom tooltip
                }}
                sx={{ mt: 2 }}
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "24px" }}>
                <svg fill="rgb(128,134,139)" width="24" height="24" viewBox="0 0 24 24" focusable="false" style={{ transform: "rotateY(180deg)" }}><path d="M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l16.57 4.44z"></path></svg>
                <Typography color="text.secondary" sx={{ fontSize: "12px" }}>Arrival · Anytime</Typography>
              </Box>
              <Slider
                value={returnArrival}
                onChange={handleReturnArrivalChange}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={24}
                components={{
                  ValueLabel: ValueLabelComponent, // Use custom tooltip
                }}
                sx={{ mt: 2 }}
              />
            </Box>
          )}
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={handleClearClick}
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