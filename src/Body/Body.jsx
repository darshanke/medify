import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Body = ({ value, setValue, changeUi, setUi }) => {
  const baseURi = `https://meddata-backend.onrender.com`;
  const [orginalState, setOrginalState] = useState([]);
  const [hospitalList, setHospitalList] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
  });
  let localData;

  const searchHospitalList = async () => {
    try {
      const res = await axios.get(
        `${baseURi}/data?state=${formData.state}&city=${formData.city}`
      );
      console.log(res.data);
      setHospitalList(res.data);
    } catch (e) {
      setHospitalList([]);
    }
  };
  //to show booking and redirect 
  const [showBooking,setBooking] = useState(false);

  const performFetchState = async () => {
    try {
      const response = await axios.get(`${baseURi}/states`);
      // console.log(response.data);
      setOrginalState(response.data);
    } catch (e) {
      console.log(e.message);
      setOrginalState([]);
    }
  };

  useEffect(() => {
    const load = async () => {
      await performFetchState();
      // console.log()
    };
    load();
  }, []);
  useEffect(() => {}, [orginalState, hospitalList, ]);
  useEffect(()=>{
    localData =  JSON.parse(localStorage.getItem('bookinglist'));
    console.log(localData);
  },[showBooking])
  // useEffect(()=>{

  //   const load=async()=>
  //     {
  //       await searchHospitalList();
  //     }
  //     load();
  // },[formData.city])

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
          setBooking={setBooking}
        />

        <Box>
          <Homehero changeUi={changeUi} showBooking={showBooking} />
        </Box>
     
      </Box>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* {showBooking  && <Typography>MyBookings</Typography>} */}
        <HeroAbsolute
          changeUi={changeUi}
          orginalState={orginalState}
          searchHospitalList={searchHospitalList}
          setUi={setUi}
          setFormData={setFormData}
          setBooking={setBooking}
          showBooking={showBooking}
        />
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
          <Typography
            sx={{ color: "#000000", fontSize: "24px", lineHeight: "36px" }}
          >
            15 medical centers available in Alaska
          </Typography>
          <Typography
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "#787887", // Set the text color

              fontSize: "16px", // Set the font size
              fontWeight: 400, // Set the font weight
              lineHeight: "24px", // Set the line height
              textAlign: "left", // Center the text
            }}
          >
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
                  marginRight: "9px",
                }}
              />
            </span>
            Book appointments with minimum wait-time & verified doctor details
          </Typography>
        </Box>
      )}
      {changeUi && (
        <Booking
          hospitalList={hospitalList}
          changeUi={changeUi}
          setUi={setUi}
          showBooking={showBooking}
          localData={localData}
        />
      )}
    </div>
  );
};

export default Body;
