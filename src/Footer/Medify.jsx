import { Box, Typography } from "@mui/material";
import React from "react";
import medify from "./medify.svg";
import facebook from './facebook.svg'
import printscreen from './printscreen.svg'
import twitter from './twitter.svg'
import youtube from './youtube.svg'


const Medify = () => {
  return (
    <Box
      sx={{
        fontFamily: "Poppins",
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: "36px",
        letterSpacing: "0.02em",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: '358.81px',
        height: '235px',
        // justifyContent: 'center'


      }}
    >
      <Typography sx={{ color: "#2AA8FF" , height: '50%' ,  }}>
        <img src={medify} alt="" />
        <span> Medify</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'flex-start',
          alignItems: "center",
          position: 'relative',
          bottom: '0px',
          width: '100%'

         
        }}
      >
        <img src={facebook} style={{ height: '35.2px', marginRight:'12px'}} alt='facebook'/>
        <img src={twitter} style={{ height: '35.2px', marginRight:'12px'}}alt='twitter'/>
        <img src={youtube} style={{ height: '35.2px', marginRight:'12px'}} alt='youtube'/>
        <img src={printscreen} style={{ height: '35.2px', marginRight:'12px'}} alt='printscreen'/>
      </Box>
    </Box>
  );
};

export default Medify;
