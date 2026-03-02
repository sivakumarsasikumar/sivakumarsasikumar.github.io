import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={show}>
      <Fab
        onClick={scrollToTop}
        size="medium"
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "#003366",
          color: "#fff",

          "&:hover": {
            backgroundColor: "#00509e",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTopButton;