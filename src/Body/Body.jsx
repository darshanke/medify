import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../SliderBar/Navbar";
import Homehero from "../HeroSection/Homehero";
import HeroAbsolute from "../HeroSection/heroAbsolute";
import SliderComponent from "../SliderComponent/SliderComponent";
import FindBySpecification from "./FindBySpecification";
import DoctorSpecidalist from "../DoctorSpecialists/DoctorSpecidalist";
import PatientCaring from "../Patient/PatientCaring";
import ReadOurLatesNews from "../ReadOurLatestNews/ReadOurLatesNews";
import OurFamily from "../OurFamily/OurFamily";
import vectorout from "./assests/Vector (2).png";
import vectorInncer from "./assests/Vector (3).png";
import { AppointmentOffer } from "../Appointment/AppointmentOffer";
import AppointmnetCard from "../Appointment/AppointmnetCard";
import Booking from "../Appointment/Booking";

const Body = ({ value, setValue, changeUi, setUi }) => {
  return (
    <div>
      <Box
        sx={{
          height: changeUi ? "auto" : "832px",
          border: "0.5px solid #FFFFFF",
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        }}
      >
        <Navbar
          value={value}
          setValue={setValue}
          changeUi={changeUi}
          setUi={setUi}
        />

        <Box>
          <Homehero changeUi={changeUi} />
        </Box>
      </Box>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HeroAbsolute changeUi={changeUi} />
      </div>
      {!changeUi && <SliderComponent />}
      {!changeUi && (
        <Box
          sx={{
            width: "100%",
            // height: "729px",
            position: "relative",

            marginTop: "10rem",
            left: "-5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
          }}
        >
          <FindBySpecification />
        </Box>
      )}
      {!changeUi && <DoctorSpecidalist />}

      {!changeUi && <PatientCaring />}
      {!changeUi && <ReadOurLatesNews />}
      {!changeUi && <OurFamily />}
      {changeUi && (
        <Box
          sx={{
            width: "643px",
            height: "64px",
            marginTop: "5rem",
            paddingLeft: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
            paddingRight: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
            fontFamily: "Poppins",
           
            fontWeight: 500,
          
            textAlign: "left",  
          }}
        >
          <Typography sx={{color: '#000000',  fontSize: "24px",  lineHeight: "36px",}}>15 medical centers available in Alaska</Typography>
          <Typography sx={{ display: 'inline-flex' , alignItems: 'center' , 
             color: "#787887", // Set the text color
          
             fontSize: "16px", // Set the font size
             fontWeight: 400, // Set the font weight
             lineHeight: "24px", // Set the line height
             textAlign: "left", // Center the text
          }}>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <img
                src={vectorout}
                alt="Vector Out"
                style={{ verticalAlign: "middle", marginRight: "4px" }}
              />
              <img
                src={vectorInncer}
                alt="Vector Inner"
                style={{
                  verticalAlign: "middle",
                  position: "relative",
                  marginLeft: "-22px",
                 marginRight: "9px"
                }}
              />
            </span>
            Book appointments with minimum wait-time & verified doctor details
          </Typography>
        </Box>
      )}
      {changeUi && <Booking/>}
      
    </div>
  );
};

export default Body;
