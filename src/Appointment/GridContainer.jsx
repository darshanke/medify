import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import bookingimage from "./assests/bookingImage.png";
import like from "./assests/like.png";
import starcopy from "./assests/Star-Copy-5.png";
import starright from "./assests/rigthmark.png";
import SlotInfo from "./SlotInfo";

const GridContainer = ({ hospitalList, onSelect ,onBook,showBooking }) => {
  debugger;
  return (
    <Grid
    onClick={onSelect}
      container
      spacing={2}
      mt={5}
      sx={{
        flexGrow: 1,
        height: "268px",
        width: "785px",
        position: "relative",

       
      }}
    >
      <Grid item xs={9}>
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#8CCFFF",
                textAlign: "center",
                mt: 2,
                width: "124px",
                height: "124px",
                borderRadius: "60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src={bookingimage}
                alt="Booking Icon"
                style={{ width: "80px", height: "auto" }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                  position: "absolute",
                  left: "100px",
                  top: '80px'
                }}
              >
                <img
                  src={starcopy}
                  alt="Star Copy"
                  style={{ marginRight: "4px" }}
                />
                <img
                  src={starright}
                  alt="Star Right"
                  style={{ marginLeft: "-20px", marginRight: "9px" }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={9}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                overflow: "hidden", 
              }}
            >
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  color: "#14BEF0",
                  whiteSpace: "normal", 
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {showBooking?hospitalList.name:hospitalList["Hospital Name"]}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#14BEF0",
                  }}
                >
                  {showBooking?`${hospitalList.city} ${hospitalList.state}`:`${hospitalList.City}${hospitalList.State}`}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#414146",
                  }}
                >
                  Smilessence Center for Advanced Dentistry + 1 more
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#414146",
                  }}
                >
                  <span style={{ color: "#02A401" }}>Free</span> &#8377; 500
                  Consultation fee at clinic
                </Typography>
              </Box>

              <Button
                sx={{
                  background: "#00A500",
                  color: "#FFFFFF",
                  borderRadius: "3.5px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  width: '30px' 
                }}
              >
                <img src={like} alt="Like Icon" />
                <span style={{ marginLeft: "4px", 
                  
                }}>45</span>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3} sx={{ textAlign: "center", position: "relative" }}>
        {showBooking && <div
          style={{
            position: "absolute",
            top: "1rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <SlotInfo slot={hospitalList.time} readable/>
          <SlotInfo slot={hospitalList.day} border readable/>
        </div>}
      
       {!showBooking && <div style={{ position: "absolute", bottom: "1rem" }}>
          <Typography sx={{ color: "#01A400", mb: 1 }}>
            Available Today
          </Typography>
          <Button
            sx={{
              width: "212px",
              height: "40px",
              padding: "9.62px 28.55px",
              borderRadius: "4px",
              background: "#2AA7FF",
              border: "1px solid #14BEF0",
              color: "#FFFFFF",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "none",
            }}
            onClick={(e) => {
              e.stopPropagation(); 
              onBook(hospitalList);
            }}
          >
            Book FREE Center Visit
          </Button>
        </div>}
      </Grid>
    </Grid>
  );
};

export default GridContainer;
