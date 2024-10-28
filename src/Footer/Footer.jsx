import { Box, Typography } from "@mui/material";
import React from "react";
import FooterDetails from "./FooterDetails";
import Medify from "./Medify";

const Footer = () => {
  return (
    <Box
      sx={{
        // position: "absolute",
        // width: "1440px",
        width: '100%',
        height: "424px",
        // top: "6215px",
        // padding: "40px 135px 30px 162px",
        // gap: "0px",
        opacity: "1",
        backgroundColor: "#1B3C74",
        zIndex: 20,
      }}
    >
        <Box sx={{
            margin: '0px 162px 40px 162px',
            display: 'flex', 
            flexDirection: 'column',
            zIndex: 20,

        }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between' , alignItems: 'center'}}>
                <Medify />
                <FooterDetails firstone/>
                <FooterDetails />
                <FooterDetails firstone/>

            </Box>
            <Typography sx={{
                textAlign: 'left',
                borderTop: "1px solid #FFFFFF1A",
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '28px',
                color: '#FFFFFFFF',
                zIndex: 20,
                
            }}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
            

        </Box>
    </Box>
  );
};

export default Footer;
