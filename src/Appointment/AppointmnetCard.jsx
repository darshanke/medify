import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import bookingimage from "./assests/bookingImage.png";
import like from "./assests/like.png";
import starcopy from "./assests/Star-Copy-5.png";
import starright from "./assests/Star-Copy-5.png";
import SlotDetails from "./SlotDetails";
import GridContainer from "./GridContainer";
import { useSnackbar } from "../SnackbarProvider";

const AppointmentCard = ({
  doctorName,
  appointmentTime,
  appointmentDate,
  hospitalList,
  setUi,
  showBooking,

  // booking,
  // setbookingslot,
}) => {
  const localData = JSON.parse(localStorage.getItem("bookinglist"));
  console.log(localData);
  const enqueSanckBar = useSnackbar();
  const commonStyle = {
    fontFamily: "Poppins",
    textAlign: "left",
  };
  const [bookingDetails, setBookingDetails] = useState(
    JSON.parse(localStorage.getItem("bookinglist")) || []
  );
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);
  const [day, setDay] = useState(() => {
    const date = new Date();
    return `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
  });
  const [bookingslot, setbookingslot] = useState({
    name: "",
    state: "",
    city: "",
    time: "",
  });
  const [timeSlot, setTimeSlot] = useState("");
  const handleBooking = (hospitalList) => {
    console.log(hospitalList, day);

    const bookingExists = bookingDetails.some((booking) => booking.day === day);

    if (bookingExists) {
      return enqueSanckBar("Booking already done for the day", {
        variant: "warn",
      });
    }

    const newBooking = {
      name: hospitalList["Hospital Name"],
      state: hospitalList.State,
      city: hospitalList.City,
      time: timeSlot,
      day: day,
    };

    setBookingDetails((prev) => {
      const updatedBookingDetails = [...prev, newBooking];

      localStorage.setItem(
        "bookinglist",
        JSON.stringify(updatedBookingDetails)
      );
      enqueSanckBar(`Booking Success for ${day}`, { variant: "success" });
      return updatedBookingDetails;
    });
  };
  const handleCardClick = (index) => {
    setSelectedSlotIndex(index);
  };
  useEffect(() => {
    setSelectedSlotIndex(null);
  }, [hospitalList]);
  useEffect(() => {
    console.log(day, bookingslot, timeSlot);
  }, [bookingslot, timeSlot, bookingDetails]);
  useEffect(() => {
    console.log(day);
  }, [day]);

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          ...commonStyle,
          background: "#FFFFFF",

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
        {!showBooking &&
          hospitalList.map((item, index) => (
            <React.Fragment key={index}>
              <GridContainer
                onSelect={() => handleCardClick(index)}
                onBook={() => handleBooking(item)}
                setBooking={setbookingslot}
                booking={bookingslot}
                hospitalList={item}
              />
              {selectedSlotIndex === index && (
                <SlotDetails
                  key={index}
                  setTimeSlot={setTimeSlot}
                  day={day}
                  setDay={setDay}
                />
              )}
            </React.Fragment>
          ))}

        {showBooking &&
          localData.map((item, index) => {
            return (
              <GridContainer
                // onSelect={() => handleCardClick(index)}
                // onBook={() => handleBooking(item)}
                // setBooking={setbookingslot}
                // booking={bookingslot}
                showBooking={showBooking}
                hospitalList={item}
              />
            );
          })}
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
