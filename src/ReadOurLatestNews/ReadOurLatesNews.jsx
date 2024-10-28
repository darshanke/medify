import { Box, Typography } from "@mui/material";
import React from "react";
import ReadNews from "./ReadNews";

const ReadOurLatesNews = () => {
  return (
    <Box
      sx={{
        //   width: '1140px',
        minHeight: "677.77px",
        display: "flex",
        flexDirection: "column",
        //   justifyContent:'center',
        textAlign: "center",
      }}
    >
      <div
        style={{
          font: "Poppins",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        <Typography
          sx={{
            color: "#2AA7FF",

            fontSize: "16px",
            lineHeight: "27px",
          }}
        >
          Blog & News{" "}
        </Typography>
        <Typography
          sx={{
            color: "#1B3C74",
            fontSize: "48px",
            lineHeight: "67px",
          }}
        >
          Read Our Latest News
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        //   width: "1162px",
          justifyContent: "center",
          alignItems: "center    ",
        }}
      >
        <ReadNews />
        <ReadNews />
        <ReadNews />
      </div>
    </Box>
  );
};

export default ReadOurLatesNews;
