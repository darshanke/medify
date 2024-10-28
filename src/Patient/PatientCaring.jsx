import { Box, Typography } from "@mui/material";
import React from "react";
import Frame from "./Frame.png";
import Patientone from "./patientsphoto.png";
import Patienttwo from "./patientsecond.png";
import phone from './phone.png'

const PatientCaring = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        // minHeight: '650px',
        height: "auto",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "519px",
          height: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          minHeight: "486px",
        }}
      >
        <Box
          sx={{
            zIndex: 3,
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 40px 40px -15px rgba(148, 182, 206, 0.15)", 
            width: "234.45px",
            height: "86px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            top: "200px",
            right: "50%",
            padding: '5px',
          }}
        >
        <Typography sx={{margin: '1px',
           fontFamily: 'Inter, sans-serif', 
           fontSize: '16px',
           fontWeight: 700, 
           lineHeight: '27px', 
           textAlign: 'left', 
           color: '#1B3C74' 
        }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ marginRight: "8px" }}>
                <img src={phone} alt="" style={{borderRadius: '8px'}} />
              </span>
              Free Consultation
                         </span>
          </Typography>
          <Typography sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              lineHeight: '24px',
              textAlign: 'left',
              color: '#77829D'
          }}>Consultation with the best</Typography>
        </Box>
        <img
          src={Patientone}
          alt=""
          height="275"
          width="332"
          style={{
            border: "5px solid #FFFFFF",
            zIndex: 1,
          }}
        />

        <img
          src={Patienttwo}
          alt=""
          height="275"
          width="332"
          style={{
            position: "relative",
            top: "-50px",
            right: "60px",
            border: "5px solid #FFFFFF",
            zIndex: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif", // Font family
            fontSize: "16px", // Font size
            fontWeight: 600, // Font weight
            lineHeight: "27px", // Line height
            textAlign: "left", // Text alignment

            borderRadius: "4px",
            color: "#2AA7FF",
          }}
        >
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "67px",
            color: "#1B3C74",
          }}
        >
          Patient{" "}
          <span
            style={{
              color: "#2AA7FF",
            }}
          >
            Caring
          </span>{" "}
        </Typography>
        <Typography
          sx={{
            color: "#77829D", // Text color
            fontFamily: "Inter, sans-serif", // Font family
            fontSize: "17px", // Font size
            fontWeight: 500, // Font weight
            lineHeight: "29px", // Line height
            textAlign: "left", // Text alignment
          }}
        >
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            color: "#1B3C74", // Text color (adjust if needed)
            fontFamily: "Roboto, sans-serif", // Font family
            fontSize: "18px", // Font size
            fontWeight: 500, // Font weight
            lineHeight: "27px", // Line height
            textAlign: "left",
          }}
        >
          <Typography>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ marginRight: "8px" }}>
                <img src={Frame} alt="" />
              </span>
              Stay Updated About Your Health
            </span>
          </Typography>

          <Typography>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ marginRight: "8px" }}>
                <img src={Frame} alt="" />
              </span>
              Check Your Results Online
            </span>
          </Typography>

          <Typography>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ marginRight: "8px" }}>
                <img src={Frame} alt="" />
              </span>
              Manage Your Appointments
            </span>
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default PatientCaring;
