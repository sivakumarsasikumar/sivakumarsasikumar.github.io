import { Container, Typography } from "@mui/material";

import StudentTable from "../components/StudentTable";

function Students() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          borderBottom: "2px solid #003366", // Navy line
          fontWeight: "600",
          mb: 2, // space after line
        }}
      >
        Research Students
      </Typography>

      <StudentTable sx={{ mt: 2 }} />
    </Container>
  );
}

export default Students;
