import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckIcon from "@mui/icons-material/Check"; // Import CheckIcon from Material-UI
import { Typography } from "@mui/material";

const SelectEconomy = ({ cabinClass, setCabinClass }) => {
  const economyTypes = [
    { value: "Economy", id: "economy" },
    { value: "Premium economy", id: "premium_economy" },
    { value: "Business", id: "business" },
    { value: "First", id: "first" },
  ];

  const cabins = (cabinClass) => {
    switch (cabinClass) {
      case "economy":
        return "Economy";
      case "premium_economy":
        return "Premium economy";
      case "business":
        return "Business";
      case "first":
        return "First";
    }
  };

  const handleChange = (event) => {
    economyTypes.map((val, index) => {
      if (val.value == event.target.value) {
        setCabinClass(val.id);
        return;
      }
    });
  };

  return (
    <div className="h-full flex justify-center items-center">
      <FormControl
        variant="filled"
        sx={{
          m: 1,
          minWidth: 120,
          height: "30px",
          padding: "0",
          marginBottom: "16px",
        }}
      >
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={cabins(cabinClass)}
          onChange={handleChange}
          displayEmpty
          sx={{ backgroundColor: "inherit", height: "40px" }} // Set backgroundColor to inherit
          renderValue={(value) => {
            return (
              <div className="flex gap-4 p-0 m-0">
                {economyTypes.find((item) => item.value === value)?.mark}
                <h2 className="pb-4 m-0">{value}</h2>
              </div>
            );
          }}
        >
          {economyTypes.map((option, index) => (
            <MenuItem
              key={index}
              value={option.value}
              sx={{ position: "relative" }}
            >
              {cabinClass === option.id && (
                <CheckIcon sx={{ position: "absolute" }} />
              )}
              <Typography sx={{ marginLeft: "40px" }}>
                {option.value}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectEconomy;
