import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, FormControlLabel, Switch } from "@mui/material";

const alliancesLabelList = [
  "Oneworld",
  "Skyteam",
  "Star Alliance"
];

const airlineLabelList = [
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

export default function Airlines() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [airlineCheckedStates, setAirlineCheckedStates] = useState(
    Array(airlineLabelList.length).fill(false) // Initialize all checkboxes as unchecked
  );
  const [alliancesCheckedStates, setAlliancesCheckedStates] = useState(
    Array(airlineLabelList.length).fill(false) // Initialize all checkboxes as unchecked
  );
  const [airlineAllCheckState, setAirlineAllCheckState] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAllianceCheckboxClick = (index) => {
    const newCheckedStates = [...alliancesCheckedStates];
    newCheckedStates[index] = !newCheckedStates[index]; // Toggle the checkbox state
    setAlliancesCheckedStates(newCheckedStates);
  };

  const handleAirlineCheckboxClick = (index) => {
    const newCheckedStates = [...airlineCheckedStates];
    newCheckedStates[index] = !newCheckedStates[index]; // Toggle the checkbox state
    setAirlineCheckedStates(newCheckedStates);
  };

  const handleAirlineOnlyClick = (index) => {
    setAlliancesCheckedStates(Array(alliancesLabelList.length).fill(false));
    const newCheckedStates = Array(airlineLabelList.length).fill(false);
    newCheckedStates[index] = true; // Toggle the checkbox state
    setAirlineCheckedStates(newCheckedStates);
    console.log(index);
  }

  const handleClearClick = () => {
    setAirlineCheckedStates(Array(airlineLabelList.length).fill(false)); // Uncheck all checkboxes
    setAlliancesCheckedStates(Array(alliancesLabelList.length).fill(false)); // Uncheck all checkboxes
  };

  const handleSelectAllClick = () => {
    let airlineAllCheck = airlineCheckedStates.every(item => item === true);
    if(!airlineAllCheckState) {setAirlineCheckedStates(
      Array(airlineLabelList.length).fill(
        !airlineCheckedStates.every(item => item === true)
      )
    )} else {
      setAirlineCheckedStates(Array(airlineLabelList.length).fill(false));
    }
    setAirlineAllCheckState(!airlineAllCheckState);
  }

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
            backgroundColor: "transparent",
          },
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
          <Box
            sx={{
              p: 3,
              overflow: "auto",
              height: "300px",
              border: "1px solid #ccc",
              borderLeft: "1px",
              borderRight: "1px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography
                variant="body2"
                sx={{ mb: 3, display: "flex", alignItems: "center", margin: "0px", fontSize: "16px" }}
              >
                Select all airlines
              </Typography>
              <Switch defaultChecked onClick={handleSelectAllClick} />
            </Box>

            <Box sx={{ padding: "0px", marginTop: "10px" }}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", fontSize: "14px", marginTop: "12px", marginBottom: "4px" }}
              >
                Alliances
              </Typography>
              <Box sx={{ paddingLeft: "8px", display: "flex", flexDirection: "column" }}>
                {alliancesLabelList.map((label, index) => (
                  <FormControlLabel
                    key={index}
                    label={<span style={{ fontSize: '14px', marginLeft: '4px' }}>{label}</span>}
                    control={<Checkbox checked={alliancesCheckedStates[index]} onChange={() => handleAllianceCheckboxClick(index)} />}
                  />
                ))}
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
                {airlineLabelList.map((label, index) =>
                  <Box key={index} className="checkbox-only-button-container" sx={{ paddingLeft: "8px", display: "flex", position: "relative", backgroundColor: "" }}>
                    <FormControlLabel
                      key={index}
                      label={<span style={{ fontSize: '14px', marginLeft: '4px' }}>{label}</span>}
                      control={<Checkbox checked={airlineCheckedStates[index]} onChange={() => handleAirlineCheckboxClick(index)} />}
                    />
                    <button className="checkbox-only-button duration-300" onClick={() => handleAirlineOnlyClick(index)}>Only</button>
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