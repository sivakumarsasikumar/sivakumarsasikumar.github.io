import React from "react";

import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

function Courses() {
  // Course Data
  const courses = [
    {
      id: 1,
      code: "",
      name: "Electronic Product Design",
      semester: "Semester 7",
      year: "2016",
    },
    {
      id: 2,
      code: " ",
      name: "Digital Electronics Laboratory",
      semester: "Semester 3",
      year: "2016",
    },
  ];

  return (
    <Container>
      {/* Page Title */}
      <Typography variant="h4" mt={4} mb={5}>
        {/* Courses  */}
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          borderBottom: "2px solid #003366", // Navy line
          fontWeight: "600",
          mb: 2, // space after line
        }}
      >
        Courses
      </Typography>
      {/* Table Wrapper */}
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#1976d221" }}>
              <TableRow>
                {/* <TableCell><b>Course Code</b></TableCell> */}
                <TableCell>
                  <b>Course Name</b>
                </TableCell>
                <TableCell>
                  <b>Semester</b>
                </TableCell>
                <TableCell>
                  <b>Year</b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id} hover>
                  {/* <TableCell>{course.code}</TableCell> */}
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.semester}</TableCell>
                  <TableCell>{course.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Courses;
