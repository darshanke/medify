import React from "react";
import AppDownload from "./AppDownload";
import playstore from "./Asests/google_play.png.png";
import applestore from "./Asests/apple_store.png.png";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import vector from "./Asests/Vector (1).png";
import mobile from "./Asests/mobile2.png";

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        marginTop: '0px',
        position: "relative",
        height: "auto",
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        zIndex: 2,
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={mobile}
          alt=""
          style={{
            position: "relative",
            top:'10px',
            left: "280px",
            clipPath: "inset(28px 0px 0px 0px)",
            borderRadius: "60px 60px 0px 0px",
            zIndex: 2,
            overflow: 'hidden'
          }}
        />
        <img
          src={mobile}
          alt=""
          style={{
            zIndex: -1,
            position: "absolute",
            // left: '100px',
            clipPath: "inset(28px 0px 0px 0px)",
            borderRadius: "60px 60px 0px 0px",
            left: "380px",
            top: "-20px",
          }}
        />
        <img
          src={vector}
          alt=""
          style={{
            zIndex: 1,
            width: "80px",
            height: "170px",
            position: "relative",
            top: "-180px",
            left: "420px",
            opacity: 0.8,
            transform: "rotate(2.51deg)",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          top: "50px",
          left: "450px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "67px",
            color: "#1B3C74",
            zIndex: 13,
            padding: "1rem",
            textAlign: "left",
          }}
        >
          Download the
          <br />
          <span>Medify</span> App
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            textAlign: "left",
          }}
        >
          Get the link to download the app
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 7,
          }}
        >
          <TextField
            id="outlined-phone-number"
            variant="outlined"
            placeholder="Enter phone number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
              style: {
                width: "350px",
                marginTop: "1rem",
                height: "49px",
                width: "391px",
              }, // Adjust the width of the text field
            }}
          />
          <Button
            variant="contained"
            sx={{ marginTop: "1rem", height: "50px", width: "121px" }}
          >
            Send SMS
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <img
            src={playstore}
            alt=""
            style={{ objectFit: "cover" }}
            // height="64px"
            width="150px"
          />

          <img
            src={applestore}
            alt=""
            style={{ objectFit: "cover" }}
            // height="64px"
            width="150px"
          />
        </div>
      </div>
    </Box>
  );
};

export default Content;
