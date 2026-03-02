import { useState ,useEffect} from "react";
import React from "react";

import { Box, Typography } from "@mui/material";

  

  


function Footer() {

  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/repos/sivakumarsasikumar/sivakumarsasikumar.github.io/commits?per_page=1")
      .then((res) => res.json())
      .then((data) => {
        const date = new Date(data[0].commit.committer.date);
        setLastUpdated(date.toLocaleDateString());
      });
  }, []);
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
        Updated: {lastUpdated}
      </Typography>
    </Box>
  );
}

export default Footer;
