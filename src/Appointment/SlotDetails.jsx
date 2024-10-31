import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SlotHeader from "./SlotHeader";
import SlotInfo from "./SlotInfo";

const SlotDetails = ({setTimeSlot,setDay,day}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const selectSlotDetails = (slot) => {
    setSelectedSlot(slot);
    setTimeSlot(slot);
  };
  const SlottimeInfo = [
    {
      Morning: ["11:30 PM"],
    },
    {
      Afternoon: [
        "01:00 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
      ],
    },
    {
      Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "785px",
        height: "278px",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      <SlotHeader  setDay={setDay} day={day}/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {SlottimeInfo.map((item, index) => {
          const key = Object.keys(item)[0];
          const values = item[key];

          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "73px",
              }}
            >
              <div
                style={{
                  width: "142px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                {key}
              </div>
              {values.map((value, valueIndex) => (
                <SlotInfo
                  key={valueIndex}
                  slot={value}
                  onClick={selectSlotDetails}
                  selectedSlot={selectedSlot}

                />
              ))}
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default SlotDetails;
