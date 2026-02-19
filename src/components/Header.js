import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/s.png";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Research", path: "/research" },
    { text: "Courses", path: "/courses" },
    // { text: "Students", path: "/students" },
    { text: "Service", path: "/service" },
    { text: "Others", path: "/others" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#003366",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          px: 2,
        }}
      >
        {/* Mobile Hamburger */}
        <IconButton
          color="inherit"
          onClick={toggleDrawer}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* S Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            ml: { xs: "auto", md: 0 },
            mr: { xs: 0, md: "auto" },
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
            }}
          />
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={NavLink}
              to={item.path}
              sx={{
                color: "#fff",
                fontWeight: 600,
                position: "relative",

                "&.active": {
                  color: "#00bfff", // Active text color
                },

                "&.active::after": {
                  width: "100%", // Active underline
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: 0,
                  left: "50%",
                  backgroundColor: "#00bfff",
                  transition: "0.3s",
                  transform: "translateX(-50%)",
                },

                "&:hover": {
                  color: "#00bfff",
                  backgroundColor: "transparent",

                  "&::after": {
                    width: "100%",
                  },
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={NavLink}
              to={item.path}
              onClick={toggleDrawer}
              sx={{
                "&.active": {
                  backgroundColor: "#e3f2fd",
                  fontWeight: "bold",
                  color: "#003366",
                },
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
