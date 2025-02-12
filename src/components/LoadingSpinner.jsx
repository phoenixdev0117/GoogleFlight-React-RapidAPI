import React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function LoadingSpinner() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          backgroundColor: "background.paper",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CircularProgress size={48} sx={{ color: "#2563eb" }} />
        <Box
          sx={{
            color: "text.primary",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Searching for flights...
        </Box>
      </Box>
    </Box>
  );
}