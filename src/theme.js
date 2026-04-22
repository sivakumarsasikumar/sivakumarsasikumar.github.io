// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
        head: {
          fontWeight: 600,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d221',
        },
      },
    },
  },
});

export default theme;
