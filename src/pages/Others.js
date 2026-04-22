import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Box,
} from "@mui/material";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

function Others() {
  // 👉 Data Array (Edit here only)
  const talks_presentation = [
    {
      id: 1,
      text: "PhD Forum, VLSID 2026, Pune",
    },
    {
      id: 2,
      text: "Student Research Forum (SRF), VLSID 2025, Bangalore",
    },
    {
      id: 3,
      text: "PhD Forum VLSI-SoC, Sharjah",
    },
    {
      id: 4,
      text: "Lifetime and Performance Enhancement Techniques for Multicore NVM Caches Indo‑Italian International Workshop on Smart and Secure Multi‑Core Systems,University of Catania, Italy (Oct 2022)",
    },
    {
      id: 5,
      text: "Student Research Forum (SRF), VLSID 2022, Virtual event",
    },
    {
      id: 6,
      text: "North-East Research Conclave (NERC), IIT Guwahati (May 2022)",
    },
  ];

  return (
    <Container>
      {/* Page Title */}
      <Typography variant="h4" mt={4} mb={3}>
        {/* Others */}
      </Typography>

      <Box mt={4} mb={5}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            borderBottom: "2px solid #003366", // Navy line
            fontWeight: "600",
            mb: 2, // space after line
          }}
        >
          Achievements
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Second Prize, Design Contest, VLSID 2019"
              secondary="2019"
            />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText
              primary="Travel Grant Recipient, VLSI‑SoC 2022 (Greece)"
              secondary="2022"
            />
          </ListItem>

          <Divider />
        </List>
      </Box>

      {/* talks and presentation*/}
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          borderBottom: "2px solid #003366", // Navy line
          fontWeight: "600",
          mb: 2, // space after line
        }}
      >
        Invited Talks & Presentations
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <List>
          {talks_presentation.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemIcon>
                  <ArrowLeftIcon
                    color="#003366"
                    sx={{
                      color: "#003366",
                    }}
                    fontSize="large"
                  />
                </ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItem>

              {/* Divider except last item */}
              {index !== talks_presentation.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Others;
