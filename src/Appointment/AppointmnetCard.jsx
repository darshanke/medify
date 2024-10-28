import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import bookingimage from "./assests/bookingImage.png";
import like from "./assests/like.png";
import starcopy from "./assests/Star-Copy-5.png";
import starright from "./assests/Stroke-11-Copy-5.png";
import SlotDetails from "./SlotDetails";

const AppointmentCard = ({ doctorName, appointmentTime, appointmentDate }) => {
  const commonStyle = {
    fontFamily: "Poppins",
    textAlign: "left",
  };
  const [bookinslot, setbookingslot] = useState(false);
  const handleBooking = () => {};
  return (
    <div style={{ width: '100%'}}>
      <Box
        sx={{
          ...commonStyle,
          background: "#FFFFFF",
          // width: "785.56px",
          width: "100%",
          // height: "268.38px",
          height: "auto", 
          padding: "24px",
          gap: "14px",
          borderRadius: "15px",
          display: "flex", 
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid item xs={9}>
            <Grid
              container
              spacing={2}
              sx={{ position: "relative", height: "100%" }}
            >
              <Grid item xs={4}>
                <div
                  style={{
                    backgroundColor: "#8CCFFF",
                    position: "relative",
                    textAlign: "center",
                    marginTop: "2rem",
                    width: "124px",
                    height: "124px",
                    borderRadius: "60px",
                  }}
                >
                  <img
                    src={bookingimage}
                    alt="bookingimage"
                    style={{
                      width: "80px",
                      height: "auto",
                      textAlign: "centre",
                      position: "relative",
                      top: "20px",
                      left: "15px",
                    }}
                  />
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      position: "relative",
                      top: "12px",
                      left: "22px",
                    }}
                  >
                    <img
                      src={starcopy}
                      alt="Vector Out"
                      style={{ verticalAlign: "middle", marginRight: "4px" }}
                    />
                    <img
                      src={starright}
                      alt="Vector Inner"
                      style={{
                        verticalAlign: "middle",
                        position: "relative",
                        marginLeft: "-20px",
                        marginRight: "9px",
                      }}
                    />
                  </span>
                </div>
              </Grid>

              <Grid
                item
                xs={8}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <Typography
                    sx={{
                      position: "relative",
                      top: "43px",
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      color: "#14BEF0",
                    }}
                  >
                    Fortis Hospital Richmond Road
                  </Typography>
                  <div style={{ position: "absolute", top: "82px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: "19.6px",
                        color: "#14BEF0",
                      }}
                    >
                      Banglore, Karnataka
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: "19.6px",
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
                        lineHeight: "19.6px",
                        color: "#414146",
                      }}
                    >
                      <span style={{ color: "#02A401" }}>Free</span> &#8377;
                      Consultation fee at clinic
                    </Typography>
                  </div>

                  <Button
                    sx={{
                      fontFamily: "Poppins",
                      width: "auto",
                      height: "auto",
                      padding: "4.5px 7.49px 4px 10.8px",
                      gap: "2.79px",
                      borderRadius: "3.5px",
                      background: "#00A500",
                      position: "absolute",
                      top: "180px",
                      marginTop: "auto",
                    }}
                  >
                    <img src={like} alt="like" />
                    <span style={{ color: "#FFFFFF" }}>45</span>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3} sx={{ ...commonStyle, position: "relative" }}>
            <div
              style={{
                position: "relative",
                top: "170px",
              }}
            >
              <Typography
                sx={{
                  color: "#01A400",
                  textAlign: "center",
                }}
              >
                Available Today
              </Typography>
              <Button
                sx={{
                  width: "212px",
                  height: "40px",
                  padding: "9.62px 28.55px 9.38px 29.45px",
                  borderRadius: "4px",
                  border: "1px solid transparent",
                  background: "#2AA7FF",
                  border: "1px solid #14BEF0",
                  color: "#FFFFFF",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "21px",
                  textAlign: "center",
                  textTransform: "none",
                }}
                onClick={() => {
                  setbookingslot(true);
                }}
              >
                Book FREE Center Visit
              </Button>
            </div>
          </Grid>
        </Grid>
        {bookinslot && <SlotDetails />}
      </Box>
    </div>
  );
};

AppointmentCard.propTypes = {
  doctorName: PropTypes.string.isRequired,
  appointmentTime: PropTypes.string.isRequired,
  appointmentDate: PropTypes.string.isRequired,
};

export default AppointmentCard;
