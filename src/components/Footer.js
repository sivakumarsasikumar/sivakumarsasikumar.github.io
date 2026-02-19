import React from "react";

import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#003366",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: 5,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Sivakumar S | All Rights Reserved | Last
        Updated: {new Date().toLocaleDateString()}
      </Typography>
    </Box>
  );
}

export default Footer;
