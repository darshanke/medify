import { Box, Card, Typography } from "@mui/material";
import React from "react";
import DoctorCards from "./DoctorCards";
import DoctorCenter from "../DoctorsImage/DoctoCenter.png";
import DoctorFirst from "../DoctorsImage/DoctoFirst.png";
import Doctor1 from "../DoctorsImage/Doctor 1.png";
import Doctor3 from "../DoctorsImage/Doctor3.png";
import DoctorLast from "../DoctorsImage/Doctorlast.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./DoctorSpecidalist.css";

const DoctorSpecidalist = () => {
  const DoctorDetial = [
    { img: Doctor1, name: "Dr. Lesley Hull", designation: "Medicine" },
    { img: DoctorFirst, name: "Dr. Ahmad Khan", designation: "Neurologist" },
    {
      img: DoctorCenter,
      name: "Dr. Heena Sachdeva",
      designation: "Orthopadics",
    },
    { img: Doctor3, name: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: DoctorLast, name: "Dr. Ahmad Stevens", designation: "Medicine" },
  ];

  return (
    <Box sx={{width: "100%", height: 'auto' }}>
      <Typography 
         sx={{
      
          fontFamily: 'Poppins, sans-serif',
          fontSize: '48px',
          fontWeight: 600,
          lineHeight: '67px',
          textAlign: 'center',
          color: '#1B3C74', 
          padding: '20px',
          borderRadius: '8px' 
     
      }}>Our Medical Specialist</Typography>
      <Box>
        <Swiper
          className="swiper container"
          sx={{ height: "auto" }}
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={false}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              if (index < 3) {
                return `<span class="${className}"></span>`;
              }
              return "";
            },
          }}
          loop={true}
       autoplay={{
        delay: 3000
       }}        
          // loopAddBlankSlides={true}
        >
          {DoctorDetial.map((item, index) => (
            <SwiperSlide key={index}>
              <DoctorCards
                img={item.img}
                name={item.name}
                designation={item.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default DoctorSpecidalist;
