import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function BagsDropdown({ value = 0, onChange }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const handleClear = () => {
    onChange(0);
  };

  const open = Boolean(anchorEl);
  const id = open ? "bags-popover" : undefined;

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
            backgroundColor: "transparent",
          },
        }}
      >
        Bags
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
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
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
                fontSize: "16px",
                fontWeight: 500,
                color: "rgb(17, 24, 39)",
              }}
            >
              Bags
            </Typography>
            <IconButton
              size="small"
              onClick={handleClose}
              sx={{
                color: "rgb(156, 163, 175)",
                p: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "rgb(107, 114, 128)",
                },
              }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={{ px: 3, pb: 3 }}>
            {/* Counter Section */}
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgb(55, 65, 81)",
                  }}
                >
                  Carry-on bag
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <IconButton
                    onClick={handleDecrement}
                    disabled={value === 0}
                    sx={{
                      width: 28,
                      height: 28,
                      backgroundColor: "rgb(243, 244, 246)",
                      "&:hover": {
                        backgroundColor: "rgb(229, 231, 235)",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "rgb(243, 244, 246)",
                      },
                    }}
                  >
                    <RemoveIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                  <Typography
                    sx={{
                      minWidth: "20px",
                      textAlign: "center",
                      fontSize: "14px",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    {value}
                  </Typography>
                  <IconButton
                    onClick={handleIncrement}
                    sx={{
                      width: 28,
                      height: 28,
                      backgroundColor: "rgb(243, 244, 246)",
                      "&:hover": {
                        backgroundColor: "rgb(229, 231, 235)",
                      },
                    }}
                  >
                    <AddIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                </Box>
              </Box>
              <Button
                sx={{
                  p: 0,
                  minWidth: "auto",
                  textTransform: "none",
                  color: "#2563eb",
                  fontSize: "14px",
                  fontWeight: 400,
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Learn more about bag selection
              </Button>
            </Box>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              px: 3,
              py: 2,
              display: "flex",
              justifyContent: "flex-end",
              borderTop: "1px solid",
              borderColor: "rgb(229, 231, 235)",
            }}
          >
            <Button
              onClick={handleClear}
              sx={{
                textTransform: "none",
                color: "#2563eb",
                minWidth: "auto",
                padding: 0,
                fontSize: "14px",
                fontWeight: 500,
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
