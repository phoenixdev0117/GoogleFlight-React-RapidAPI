import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import { Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const CountControl = ({ label, subLabel, count, onIncrease, onDecrease }) => {
  const theme = useTheme(); // Access the current theme
  return (
    <div className="flex gap-4 h-[48px] justify-center items-center">
      <Box>
        <Typography sx={{ width: "140px" }}>{label}</Typography>
        <Typography
          sx={{ fontSize: "12px", color: "#888888", marginTop: "-4px" }}
        >
          {subLabel}
        </Typography>
      </Box>
      <IconButton
        variant="contained"
        size="small"
        sx={{
          width: "30px",
          height: "30px",
          background: "#88888811",
          color: "black",
        }}
        onClick={onDecrease}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
          }}
        >
          -
        </Typography>
      </IconButton>
      {count}
      <IconButton
        variant="contained"
        size="small"
        sx={{
          width: "30px",
          height: "30px",
          background: "#88888811",
          color: "black",
        }}
        onClick={onIncrease}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
          }}
        >
          +
        </Typography>
      </IconButton>
    </div>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SelectMemberCount({ counts, setCounts }) {
  const theme = useTheme(); // Access the current theme
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDecrease = (type) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (type === "Adults" && newCounts[0] > 0) {
        newCounts[0] -= 1;
      } else if (type === "Children" && newCounts[1] > 0) {
        newCounts[1] -= 1;
      } else if (type === "InfantsSeat" && newCounts[2] > 0) {
        newCounts[2] -= 1;
      } else if (type === "InfantsLap" && newCounts[3] > 0) {
        newCounts[3] -= 1;
      }
      return newCounts;
    });
  };

  const handleIncrease = (type) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (type === "Adults" && newCounts[0] < 100) {
        newCounts[0] += 1;
      } else if (type === "Children" && newCounts[1] < 100) {
        newCounts[1] += 1;
      } else if (type === "InfantsSeat" && newCounts[2] < 100) {
        newCounts[2] += 1;
      } else if (type === "InfantsLap" && newCounts[3] < 100) {
        newCounts[3] += 1;
      }
      return newCounts;
    });
  };

  const totalCount = counts.reduce((acc, count) => acc + count, 0);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Array of count types and their corresponding labels
  const countTypes = [
    { label: "Adults", subLabel: "", key: "Adults" },
    { label: "Children", subLabel: "Aged 2-11", key: "Children" },
    { label: "Infants", subLabel: "In seat", key: "InfantsSeat" },
    { label: "Infants", subLabel: "On lap", key: "InfantsLap" },
  ];

  return (
    <div className="w-[100px] h-[40px]">
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "inherit",
          width: "100%",
          height: "100%",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transition
          "&:hover": {
            backgroundColor: "rgba(250, 250, 250, 0.9)",
            boxShadow: "0 4px 8px rgba(200, 200, 200, 0.9)",
          },
        }}
      >
        <svg
          width="20"
          fill={theme.palette.text.primary}
          height="20"
          viewBox="0 0 24 24"
          focusable="false"
          className="b6yMgc DWE1s NMm5M"
        >
          <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
        </svg>
        <Typography
          sx={{ color: theme.palette.text.primary, marginLeft: "12px" }}
        >
          {totalCount}
        </Typography>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          focusable="false"
          className="FcFFRbG7l2HbNMm5M"
        >
          <path d="M7 10l5 5 5-5H7z"></path>
        </svg>
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
      >
        <Box sx={{ width: "300px", padding: "20px" }}>
          {countTypes.map(({ label, key, subLabel }, index) => (
            <CountControl
              key={index}
              label={label}
              subLabel={subLabel}
              count={counts[index]}
              onIncrease={() => handleIncrease(key)}
              onDecrease={() => handleDecrease(key)}
            />
          ))}
        </Box>
      </Popover>
    </div>
  );
}
