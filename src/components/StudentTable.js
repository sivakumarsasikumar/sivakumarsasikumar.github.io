import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery
} from "@mui/material";

import students from "../data/students";

function StudentTable() {

  const isMobile = useMediaQuery("(max-width:900px)");

  /* Mobile View */
 /* Mobile View */
/* Mobile View */
if (isMobile) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100%", m: 0 }}   // Important
    >

      {students.map((s) => (

        <Grid
          item
          xs={12}
          key={s.id}
          sx={{ width: "100%" }}     // Important
        >

          <Card
            sx={{
              width: "100%",
              boxSizing: "border-box" // Prevent overflow
            }}
          >

            <CardContent>

              <Grid
                container
                spacing={2}
                alignItems="center"
                wrap="nowrap"
              >

                <Grid item>
                  <Avatar
                    src={s.image}
                    sx={{ width: 80, height: 80 }}
                  />
                </Grid>

                <Grid item xs>

                  <Typography variant="h6">
                    {s.name}
                  </Typography>

                  <Typography>
                    Research: {s.topic}
                  </Typography>

                  <Typography>
                    Program: {s.program}
                  </Typography>

                </Grid>

              </Grid>

            </CardContent>

          </Card>

        </Grid>

      ))}

    </Grid>
  );
}



  /* Desktop View */
  return (
    <Table>

      <TableHead>

        <TableRow>
          <TableCell>Photo</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Research Topic</TableCell>
          <TableCell>Program</TableCell>
        </TableRow>

      </TableHead>

      <TableBody>

        {students.map((s) => (

          <TableRow key={s.id}>

            <TableCell>
              <Avatar src={s.image} />
            </TableCell>

            <TableCell>{s.name}</TableCell>
            <TableCell>{s.topic}</TableCell>
            <TableCell>{s.program}</TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>
  );
}

export default StudentTable;
