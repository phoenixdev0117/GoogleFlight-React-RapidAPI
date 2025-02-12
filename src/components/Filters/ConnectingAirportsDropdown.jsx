import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

const airports = [
  {code:"AMS", name: "Amsterdam" },
  {code:"BCN", name: "Barcelona" },
  {code:"BEG", name: "Belgrade" },
  {code:"BOS", name: "Boston" },
  {code:"BRU", name: "Brussels" },
  {code:"CAI", name: "Cairo" },
  {code:"CPH", name: "Copenhagen" },
  {code:"DUB", name: "Dublin" },
  {code:"FRA", name: "Frankfurt" },
  {code:"GVA", name: "Geneva" },
  {code:"HEL", name: "Helsinki" },
  {code:"IST", name: "İstanbul" },
  {code:"LIS", name: "Lisbon" },
  {code:"LCY", name: "London" },
  {code:"LHR", name: "London" },
  {code:"MAD", name: "Madrid" },
  {code:"LIN", name: "Milan" },
  {code:"YUL", name: "Montreal" },
  {code:"MUC", name: "Munich" },
  {code:"OSL", name: "Oslo" },
  {code:"CDG", name: "Paris" },
  {code:"PDL", name: "Ponta Delgada" },
  {code:"KEF", name: "Reykjavík" },
  {code:"RIX", name: "Riga" },
  {code:"ARN", name: "Stockholm" },
  {code:"TLV", name: "Tel Aviv-Yafo" },
  {code:"YYZ", name: "Toronto" },
  {code:"VIE", name: "Vienna" },
  {code:"WAW", name: "Warsaw" },
  {code:"ZRH", name: "Zürich" },
]

const DEFAULT_RANGE = [0, 60];

const formatTime = (hours) => {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
};

export default function ConnectingAirportsDropdown({ 
  selectedAirports = airports.map(airport => airport.code), 
  onAirportsChange,
  layoverRange = DEFAULT_RANGE,
  onLayoverChange 
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [allAirports, setAllAirports] = useState(true);
  const [localLayoverRange, setLocalLayoverRange] = useState(layoverRange);
  const [hoveredAirport, setHoveredAirport] = useState(null);

  useEffect(() => {
    const allSelected = selectedAirports.length === airports.length;
    setAllAirports(allSelected);
  }, [selectedAirports]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAllAirportsToggle = () => {
    const newState = !allAirports;
    setAllAirports(newState);
    if (newState) {
      onAirportsChange(airports.map(airport => airport.code));
    } else {
      onAirportsChange([]);
    }
  };

  const handleAirportToggle = (code) => {
    const currentSelected = new Set(selectedAirports);
    if (currentSelected.has(code)) {
      currentSelected.delete(code);
    } else {
      currentSelected.add(code);
    }
    onAirportsChange(Array.from(currentSelected));
  };

  const handleOnlyClick = (code) => {
    onAirportsChange([code]);
    setAllAirports(false);
  };

  const handleLayoverChange = (_, newValue) => {
    setLocalLayoverRange(newValue);
    onLayoverChange(newValue);
  };

  const handleLayoverClear = () => {
    setLocalLayoverRange(DEFAULT_RANGE);
    onLayoverChange(DEFAULT_RANGE);
  };

  const handleClear = () => {
    // Reset to initial state: all airports selected and full range
    onAirportsChange(airports.map(airport => airport.code));
    setLocalLayoverRange(DEFAULT_RANGE);
    onLayoverChange(DEFAULT_RANGE);
    setAllAirports(true);
  };

  const open = Boolean(anchorEl);
  const id = open ? "connecting-airports-popover" : undefined;

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
        Connecting airports
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
              borderBottom: '1px solid',
              borderColor: 'rgb(229, 231, 235)'
            }}
          >
            <Typography 
              sx={{ 
                fontSize: '16px',
                fontWeight: 500,
                color: 'rgb(17, 24, 39)'
              }}
            >
              Connecting airports
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
          <Box sx={{ px: 3, py: 3 }}>
            {/* Layover Duration */}
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgb(17, 24, 39)',
                  mb: 1
                }}
              >
                Layover duration
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2
              }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: 'rgb(107, 114, 128)',
                  }}
                >
                  {formatTime(localLayoverRange[0])} – {formatTime(localLayoverRange[1])}
                </Typography>
                <Button
                  onClick={handleLayoverClear}
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
              <Slider
                value={localLayoverRange}
                onChange={handleLayoverChange}
                min={0}
                max={60}
                step={1}
                sx={{
                  color: '#2563eb',
                  '& .MuiSlider-rail': {
                    height: 4,
                    backgroundColor: '#e5e7eb',
                  },
                  '& .MuiSlider-track': {
                    height: 4,
                  },
                  '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#2563eb',
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: 'none',
                    },
                  },
                }}
              />
            </Box>

            {/* All Airports Toggle */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgb(17, 24, 39)'
                }}
              >
                All connecting airports
              </Typography>
              <Switch
                checked={allAirports}
                onChange={handleAllAirportsToggle}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#2563eb',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#2563eb',
                  },
                }}
              />
            </Box>

            {/* Airports List */}
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgb(107, 114, 128)',
                mb: 2
              }}
            >
              Airports
            </Typography>
            <Box
              sx={{
                maxHeight: 300,
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#c1c1c1',
                  borderRadius: '3px',
                },
              }}
            >
              {airports.map((airport) => (
                <Box
                  key={airport.code}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: 0.5,
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(243, 244, 246, 0.5)',
                    }
                  }}
                  onMouseEnter={() => setHoveredAirport(airport.code)}
                  onMouseLeave={() => setHoveredAirport(null)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Checkbox
                      size="small"
                      checked={selectedAirports.includes(airport.code)}
                      onChange={() => handleAirportToggle(airport.code)}
                      sx={{
                        color: 'rgb(209, 213, 219)',
                        padding: '4px',
                        '&.Mui-checked': {
                          color: '#2563eb',
                        },
                        '& .MuiSvgIcon-root': {
                          fontSize: 18,
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: 'rgb(55, 65, 81)',
                        cursor:'pointer'
                      }}
                      onClick={() => handleAirportToggle(airport.code)}
                    >
                      {airport.name} ({airport.code})
                    </Typography>
                  </Box>
                  {hoveredAirport === airport.code && (
                    <Button
                      onClick={() => handleOnlyClick(airport.code)}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        minWidth: 'auto',
                        padding: '2px 8px',
                        fontSize: '12px',
                        color: '#2563eb',
                        backgroundColor: 'rgba(239, 246, 255, 0.8)',
                        textTransform: 'none',
                        borderRadius: '9999px',
                        transition: 'all 0.2s',
                        '&:hover': {
                          backgroundColor: 'rgba(219, 234, 254, 0.8)',
                        },
                      }}
                    >
                      Only
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
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