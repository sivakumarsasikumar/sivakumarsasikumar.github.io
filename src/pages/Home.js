import React from "react";

import {
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material";
import profile from "../assets/profile.png";
import newGif from "../assets/new.gif";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const StyledComponent = styled("div")((props) => ({
  "& .bold": {
    fontWeight: "600",
  },
}));

const resentNews = [
  {
    id: 1,
    news: "2026 : PhD Forum, VLSID 2026, Pune (Accepted)",
    img: newGif,
  },
  {
    id: 2,
    news: "2025 : Student Research Forum (SRF), VLSID 2025, Bangalore",
    img: "",
  },
];
const courses = [
  {
    id: 1,
    code: "Ph.D",
    place: "Indian Institute of Technology Guwahati, Assam, India",
    year: "2025",
    credits: 4,
    type: "Computer Science and Engineering,",
  },
  {
    id: 2,
    code: "M.Tech",
    place:
      "Cochin University of Science and Technology (CUSAT), Kochi, Kerala, India",
    year: "2016",
    credits: 4,
    type: "Computer Science and Engineering,",
  },
  {
    id: 3,
    code: "B.Tech",
    place:
      "Cochin University of Science and Technology (CUSAT), Kochi, Kerala India",
    year: "2013",
    credits: 3,
    type: "Electronics and Communication Engineering,",
  },
  {
    id: 4,
    code: "Higher Secondary Examination (Technical)",
    place: "Model Technical HSS, Kaloor, Kerala",
    year: "2008",
    credits: 3,
    type: "",
  },
  {
    id: 5,
    code: "Technical High School Leaving Certificate",
    place: "Model Technical HSS, Kaloor,Kerala",
    year: "2006",
    credits: 3,
    type: "",
  },
];
function Home() {
  return (
    <>
      <StyledComponent>
        <Container>
          {/* Profile Section */}

          <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
            <Grid container spacing={3} alignItems="center">
              {/* Profile Image */}
              <Grid item xs={12} md={3} textAlign="center">
                <Avatar
                  src={profile}
                  sx={{
                    width: 160,
                    height: 160,
                    margin: "auto",
                    border: "4px solid #003366",
                  }}
                />
              </Grid>

              {/* Profile Info */}
              <Grid item xs={12} md={9}>
                <Typography variant="h4">Sivakumar S</Typography>

                <Typography variant="h6" color="text.secondary">
                  Senior Engineer,{" "}
                  <Link
                    href="https://www.vayavyalabs.com/"
                    target="_blank"
                    underline="none"
                    sx={{ color: "#003366" }}
                  >
                    Vayavya Labs Pvt. Ltd.
                  </Link>{" "}
                  (Bangalore)
                </Typography>

                <Typography variant="body1" mt={1}>
                  Ph.D. (Computer Science & Engineering, 2025)
                </Typography>

                <Typography variant="body1">IIT Guwahati, Assam</Typography>

                <Typography mt={2}>
                  Thesis title: Performance and Lifetime Enhancement of
                  Non-Volatile Memory Caches
                </Typography>

                {/* Contact Info */}
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row", md: "row" }} // Mobile → column, Desktop → row
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  justifyContent="flex-start"
                  gap={3}
                >
                  {/* Email */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon sx={{ color: "#003366", fontSize: 20 }} />

                    <Link
                      href="mailto:siva17191@gmail.com"
                      underline="none"
                      sx={{
                        marginTop: "3px", // Add top margin on mobile
                        color: "#003366",
                        fontWeight: 500,
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      siva17191@gmail.com
                    </Link>
                  </Box>

                  {/* Phone */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <PhoneIcon sx={{ color: "#003366", fontSize: 20 }} />

                    <Link
                      href="tel:+918547185936"
                      underline="none"
                      sx={{
                        color: "#003366",
                        fontWeight: 500,
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      +91-8547185936 | +91-8848427144
                    </Link>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    <LinkedInIcon sx={{ color: "#003366", fontSize: 20 }} />

                    <Link
                      href="https://www.linkedin.com/in/sivakumar-s-b8996885/"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{
                        color: "#003366",
                        fontWeight: 500,
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      linkedin.com/in/sivakumar
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* About Section */}
          <Box mt={4}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                borderBottom: "2px solid #003366", // Navy line
                fontWeight: "600",
                mb: 1, // space after line
              }}
            >
              About
            </Typography>

            <Typography>
              Early-career academic and researcher with a Ph.D. in Computer
              Science and Engineering from IIT Guwahati, specializing in
              Computer Architecture, performance and lifetime enhancement of
              Non-Volatile Memory (NVM) systems. Author of peer‑reviewed
              publications in ACM TODAES and IEEE/IFIP conferences.
            </Typography>
            <Typography sx={{ mt: 1 }}>
              Experienced in teaching, supervising student projects, and
              contributing to funded research projects. Also brings relevant
              industry R&D experience in system‑level design.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 4,
              p: 3,
              border: "1px solid #999",
              backgroundColor: "#f4f6f8", // Light yellow
              borderRadius: 1,
            }}
          >
            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                // color: "#003366",
              }}
            >
              News & Updates
            </Typography>

            {/* News List */}
            <Box
              sx={{
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {resentNews?.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    mb: 1.2,
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  • {item.news}
                  {item.img && (
                    <img
                      src={item.img}
                      alt="new"
                      style={{ width: "40px", marginLeft: "8px" }}
                    />
                  )}
                </Typography>
              ))}
            </Box>
          </Box>

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
              Academic Profile
            </Typography>
          </Box>

          {/* Table Wrapper */}
          <Box>
            <TableContainer component={Paper}>
              <Table
                sx={{
                  "& th": {
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                  "& td": {
                    fontSize: "1rem",
                  },
                }}
              >
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id} hover>
                      <TableCell sx={{ fontSize: "14px" }}>
                        {course.code}
                      </TableCell>
                      <TableCell>
                        {course.type}
                        <div>{course.place}</div>
                      </TableCell>
                      <TableCell>{course.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </StyledComponent>
    </>
  );
}

export default Home;
