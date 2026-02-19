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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

function Service() {
  // 👉 Data Array (Edit here only)
  const serviceData = [
    {
      id: 1,
      text: "Organizing Co-Chair, ISEA Virtual Presentation Conclave (IVPC-2022)",
    },
    {
      id: 2,
      text: "Technical Committee Member, IEEE INDICON 2021",
    },
    {
      id: 3,
      text: "Volunteer, North-East Research Conclave & Assam Biotech Conclave 2022",
    },
    {
      id: 4,
      text: "Volunteer, BDSET (Bangladesh-Bharot Digital Service and Employment Training Program)",
    },
    {
      id: 5,
      text: "Volunteer in Faculty Development Programs, NPTEL & GIAN Courses",
    },
  ];

  const experienceData = [
    {
      id: 1,
      category: "Industry",
      organization: "Vayavya Labs Pvt. Ltd., Bangalore",
      role: "Senior Engineer",
      duration: "April 2023 – Present",
      description: [
        "Working on modelling of various components and performance modeling.",
      ],
    },
    {
      id: 2,
      category: "Research",
      organization: "MARS Research Lab, IIT Guwahati",
      role: "Senior Research Fellow",
      duration: "September 2022 – March 2023",
      description: [
        "Worked on security enhancement of NoC in multi-core processors under a DST‑funded research project",
        "Contributed to architectural simulations and performance analysis, purchase of equipment.",
      ],
    },

    {
      id: 3,
      category: "Research",
      organization: "MARS Research Lab, IIT Guwahati",
      role: "Assistant Project Engineer ",
      duration: "November 2016 – June 2017",
      description: [
        "Worked on many‑core processor optimization under a DST‑funded research project",
        "Contributed to architectural simulations and performance analysis purchase of equipment, setting up of lab.",
      ],
    },

    {
      id: 4,
      category: "Academic",
      organization:
        "Division of Electronics & Communication, School of Engineering, CUSAT, Kochi, Kerala",
      role: "Assistant Professor (Guest)",
      duration: "August 2016 – November 2016",
      description: [
        "Delivered undergraduate courses in Electronic Product Design",
        "Designed lecture materials, assignments, and evaluations",
        "Handled Digital Electronics Laboratory",
      ],
    },
    {
      id: 5,
      category: "Academic",
      organization: "Indian Institute of Technology Guwahati, Assam",
      role: "Teaching Assistant",
      duration: "2017 – 2022",
      description: [
        "Assisted in Computer Organization & Architecture, Operating Systems, and Multicore Computer Architecture",
        "Conducted laboratory sessions, tutorials, and student project mentoring",
        "Teaching assistance in NPTEL courses(Multicore Computer Architecture - Storage and Interconnects (Feb- April 2020), (Aug-Oct 2021),Advanced Computer Architecture (Feb- April 2021)),Member of many international and national conference and workshop organising teams including INDICON, GIAN etc.",
      ],
    },
  ];
  return (
    <Container>
      {/* Page Title */}
      <Typography variant="h4" mt={4} mb={5}>
        {/* Service */}
      </Typography>
      {/* Page Title */}
      <Box mt={4}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            borderBottom: "2px solid #003366", // Navy line
            fontWeight: "600",
            mb: 2, // space after line
          }}
        >
          Experience
        </Typography>
      </Box>

      {/* Table */}
      <Box mb={7} mt={3}>
        <TableContainer component={Paper} elevation={3}>
          <Table
            sx={{
              minWidth: 650,

              // Global table styling
              "& th": {
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: "#f5f7fa",
              },

              "& td": {
                fontSize: "1rem",
              },
            }}
          >
            {/* Table Header */}
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Organization</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {experienceData.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.category}</TableCell>

                  <TableCell>{row.organization}</TableCell>

                  <TableCell>{row.role}</TableCell>

                  <TableCell>{row.duration}</TableCell>

                  <TableCell>
                    {" "}
                    {row.description?.map((item, index) => (
                      <Typography
                        key={index}
                        sx={{
                          mb: 1.2,
                          fontSize: "1rem",
                          lineHeight: 1.6,
                        }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* other service */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          borderBottom: "2px solid #003366", // Navy line
          fontWeight: "600",
          mb: 2, // space after line
        }}
      >
        Academic Service & Volunteering
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <List>
          {serviceData.map((item, index) => (
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
              {index !== serviceData.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Service;
