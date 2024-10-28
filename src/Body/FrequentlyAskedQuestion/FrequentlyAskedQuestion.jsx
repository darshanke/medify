import { Box, Typography } from "@mui/material";
import React from "react";
import image from "./image.png";
import smile from "./Frame (1).png";
import group from "./Group.png";

const FrequentlyAskedQuestion = ({changeUi={changeUi}}) => {
  return (
    <Box
      sx={{
        fontFamily: "Poppins",
      }}
    >
      <Box
        sx={{
          marginTop: changeUi?"4rem":"1rem",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        <Typography
          sx={{
            color: "#2AA7FF",

            fontSize: "16px",
          }}
        >
          Get Your Answer
        </Typography>
        <Typography
          sx={{
            color: "#1B3C74",

            fontSize: "48px",
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            maxWidth: "1120px",
            gap: "8",
            margin: "1rem",
          }}
        >
          <Box
            sx={{
              width: "522px",
              height: "499.84px",
              // display: 'flex',
              // justifyContent: 'flex-end',
              // alignItems: 'center',
              position: "relative",
              border: "4px solid #FFFFFF",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                width: "241.93px",
                height: "104.59px",
                position: "relative",
                top: "301px",
                left: "-85px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={smile} height="44" width="44" alt="" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  padding: "3px",
                }}
              >
                <Typography sx={{ color: "#1B3C74", fontSize: "24px" }}>
                  84K+
                </Typography>
                <Typography sx={{ color: "#77829D", fontSize: "17px" }}>
                  Happy Patients{" "}
                </Typography>
              </Box>
            </Box>

            <img
              src={image}
              alt=""
              style={{ objectFit: "cover", width: "500px" }}
            />
            <Box
              sx={{
                position: "relative",
                width: "80px",
                height: "80px",
                top: "-210px",
                left: "460px",
                background: "#FFFFFF",
                boxShadow: "0px 15px 25px 0px #0000000F",
                borderRadius: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={group} alt="" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "30px",
              textAlign: "left",
              color: "#1B3C74",
              marginTop: "8rem",
              marginLeft: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <Typography>Why choose our medical for your family?</Typography>
              <span sx={{ color: "#2AA7FF" }}>+</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <Typography>Why we are different from others?</Typography>
              <span sx={{ color: "#2AA7FF" }}>+</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <Typography>Trusted & experience senior care & love</Typography>
              <span sx={{ color: "#2AA7FF" }}>+</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <Typography>
                How to get appointment for emergency cases?
              </Typography>
              <span sx={{ color: "#2AA7FF" }}>+</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FrequentlyAskedQuestion;
