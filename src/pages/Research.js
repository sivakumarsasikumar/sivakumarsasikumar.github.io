import React from "react";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  ListItemIcon,
} from "@mui/material";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

/* Navbar Link Style */
const navLink = {
  marginRight: "12px",
  fontWeight: "600",
  textDecoration: "none",
};



  const skillsData = [
    {
      id: 1,
      title: "Programming Languages",
      value: "C, C++, SystemC",
    },
    {
      id: 2,
      title: "Architectural Simulators & Frameworks",
      value: "gem5, SPARTA",
    },
    {
      id: 3,
      title: "Research Areas",
      value:
        "Computer Architecture, Non-Volatile Memory Systems, Multicore Processors",
    },
  ];

// journals Data
const journals = [
  {
    id: 1,
    no: "J1",
    title:
      "Enhancing Lifetime and Performance of MLC NVM Caches Using Embedded Trace Buffers",
    authors: "S. Sivakumar, John Jose, Vijaykrishnan Narayanan",
    year: "2024",
    details:
      "ACM Transactions on Design Automation of Electronic Systems (TODAES), Vol. 29, Issue 3, Article 58, pp. 1–24",
    link: "https://dl.acm.org/doi/10.1145/3659102",
  },
  {
    id: 2,
    no: "J2",
    title:
      "Self‑Adaptive Logical Split Cache Techniques for Delayed Aging of NVM LLC",
    authors: "S. Sivakumar, John Jose",
    year: "2023",
    details: "ACM TODAES, Vol. 28, Issue 6, Article 97, pp. 1–24",
    link: "https://dl.acm.org/doi/10.1145/3616871",
  },
];

// conferences Data
const conferences = [
  {
    id: 1,
    no: "C1",
    title: "ENDURA: Enhancing Durability of Multi‑Level Cell STT‑RAM Caches",
    authors: "Yogesh Kumar, S. Sivakumar, John Jose",
    year: "2022",
    details: "IFIP/IEEE VLSI‑SoC 2022, Patras, Greece",
    link: "https://ieeexplore.ieee.org/document/9939583",
  },
  {
    id: 2,
    no: "C2",
    title:
      "Enhancing Lifetime of Non‑Volatile Memory Caches by Write‑Aware Techniques",
    authors: "S. Sivakumar, Mani Mannampalli, John Jose",
    year: "2022",
    details: "ISDCS‑2022, Kolkata, India",
    link: "https://www.iitg.ac.in/johnjose/Publications/C42_ISDCS2022_Siva.pdf",
  },
  {
    id: 3,
    no: "C3",
    title:
      "Improving Lifetime of Non‑Volatile Memory Caches by Logical Partitioning",
    authors: "S. Sivakumar, T. M. Abdul Khader, John Jose​",
    year: "2021",
    details: "GLSVLSI 2021, USA (Virtual)",
    link: "https://dl.acm.org/doi/10.1145/3453688.3461488",
  },
];
const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


function Research() {
  return (
    <Container>
      {/* Page Title */}
      <Typography variant="h4" mt={4} mb={5}>
        {/* Research */}
      </Typography>

      {/* Research Areas */}
      {/* <Box mb={4}>

        <Typography variant="h5" gutterBottom>
          Research Areas
        </Typography>

        <Grid container spacing={2}>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  VLSI Design
                </Typography>
                <Typography variant="body2">
                  Low power circuits, chip design,
                  and hardware optimization.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Cyber Security
                </Typography>
                <Typography variant="body2">
                  Network security, cryptography,
                  and intrusion detection systems.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Computer Networks
                </Typography>
                <Typography variant="body2">
                  Wireless networks, IoT,
                  and cloud computing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

      </Box> */}
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
          Teaching & Research Interests
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Computer Architecture,Embedded Systems,Microprocessors & Microcontrollers"
              secondary="(Teaching)"
            />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText
              primary="Computer Architecture, Non‑Volatile Memory Systems, Cache Architectures"
              secondary="(Research)"
            />
          </ListItem>

          <Divider />
        </List>
      </Box>

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
          Technical Skills
        </Typography>


      <Box mb={4}>

        <Paper elevation={3} sx={{ p: 3 }}>

          <List>

            {skillsData.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  ml: 3,
                }}
              >
                <ListItemText
                  primary={
                    <>
                      <strong>{item.title}:</strong> {item.value}
                    </>
                  }
                />
              </ListItem>
            ))}

          </List>

        </Paper>

      </Box>
















        
      </Box>
      {/* ================= NAVBAR ================= */}
   

      <Box mt={4} mb={4} textAlign="center">
  <Typography
    component="span"
    sx={{ cursor: "pointer", color: "primary.main", fontSize: 18, mx: 2 }}
    onClick={() => handleScroll("journals")}
  >
    Journal Publications
  </Typography>
 {""}||{" "}
  <Typography
    component="span"
    sx={{ cursor: "pointer", color: "primary.main", fontSize: 18, mx: 2 }}
    onClick={() => handleScroll("conference")}
  >
    Conference Publications
  </Typography>
</Box>

      {/* Journal Publications */}
      <Box mt={4} id="journals">
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            borderBottom: "2px solid #003366",
            fontWeight: "600",
            mb: 2,
          }}
        >
          Journal Publications
        </Typography>

        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table>
            {/* Table Head */}
            <TableHead sx={{ backgroundColor: '#1976d221' }}>
              <TableRow>
                <TableCell>
                  <b>Sl.No</b>
                </TableCell>
                <TableCell>
                  <b>Year</b>
                </TableCell>
                <TableCell>
                  <b>Title & Authors</b>
                </TableCell>
                <TableCell>
                  <b>Journal</b>
                </TableCell>
                <TableCell>
                  <b>Links</b>
                </TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {journals.map((journal) => (
                <TableRow key={journal.id}>
                  <TableCell>{journal.no}</TableCell>
                  <TableCell>{journal.year}</TableCell>

                  <TableCell>
                    {journal.title}
                    <br />
                    {journal.authors}
                  </TableCell>

                  <TableCell>{journal.details}</TableCell>

                  <TableCell>
                    <Link href={journal.link} underline="hover" target="_blank" rel="noopener">
                      DOI
                    </Link>
                   
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* ================= CONFERENCE ================= */}

      <Box mt={4} id="conference">
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            borderBottom: "2px solid #003366",
            fontWeight: "600",
            mb: 2,
            mt: 6,
          }}
        >
          Conference Publications
        </Typography>

        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table>
            {/* Table Head */}
            <TableHead sx={{ backgroundColor: '#1976d221' }}
            // sx={{ backgroundColor: "#f4f6f8" }}
            
            >
              <TableRow>
                <TableCell>
                  <b>Sl.No</b>
                </TableCell>
                <TableCell>
                  <b>Year</b>
                </TableCell>
                <TableCell>
                  <b>Title & Authors</b>
                </TableCell>
                <TableCell>
                  <b>Conference Place</b>
                </TableCell>
                <TableCell>
                  <b>Links</b>
                </TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {conferences.map((conf) => (
                <TableRow key={conf.id}>
                  <TableCell>{conf.no}</TableCell>
                  <TableCell>{conf.year}</TableCell>

                  <TableCell>
                    {conf.title}
                    <br />
                    {conf.authors}
                  </TableCell>

                  <TableCell>{conf.details}</TableCell>

                  <TableCell>
                      <Link href={conf.link} underline="hover" target="_blank" rel="noopener">
                      DOI
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Projects 
      <Box mb={4} sx={{ mt: 6 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            borderBottom: "2px solid #003366", // Navy line
            fontWeight: "600",
            mb: 2, // space after line
          }}
        >
          Ongoing Research Projects
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Smart Healthcare Monitoring
                </Typography>
                <Typography variant="body2">
                  Developing IoT-based health monitoring systems with secure
                  communication.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">AI-Based Network Defense</Typography>
                <Typography variant="body2">
                  Using machine learning to detect cyber attacks in real time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>*/}
    </Container>
  );
}
/* Responsive Wrapper */
function TableWrapper({ children }) {
  return <Box sx={{ overflowX: "auto" }}>{children}</Box>;
}

export default Research;
