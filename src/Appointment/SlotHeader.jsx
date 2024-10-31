// import React from "react";
// import { Tab, Tabs ,Box} from "@mui/material";
// import leftArrow from "./assests/Vector (4).png"; // Corrected the path
// import rightArrow from "./assests/Vector (5).png"; // Corrected the path

// // Custom Left Arrow Component
// const CustomPrevArrow = ({ onClick }) => (
//   <div
//     style={{
//       position: "absolute",
//       left: "0",
//       top: "50%",
//       transform: "translateY(-50%)",
//       zIndex: 1,
//       cursor: "pointer",
//       width: "48px",
//       height: "48px",

//       borderRadius: "24px",
//       border: "1px solid transparent",
//       borderTop: "1px solid #E0E0E4",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "",
//     }}
//     onClick={onClick}
//   >
//     <img src={leftArrow} alt="Previous" />
//   </div>
// );

// // Custom Right Arrow Component
// const CustomNextArrow = ({ onClick }) => (
//   <div
//     style={{
//       position: "absolute",
//       right: "0",
//       top: "50%",
//       transform: "translateY(-50%)",
//       zIndex: 1,
//       cursor: "pointer",
//     }}
//     onClick={onClick}
//   >
//     <img src={rightArrow} alt="Next" />
//   </div>
// );

// // Main SlotHeader Component
// const SlotHeader = ({
//   dates = [
//     { label: "Today", slots: "2" },
//     { label: "Tomorrow" },
//     { label: "In 2 Days" },
//     { label: "In 3 Days" },
//     { label: "In 4 Days" },
//   ],
//   onDateClick,
// }) => {
//   const today = new Date();
//   const updatedDates = dates.map((item, index) => {
//     const date = new Date(today);
//     date.setDate(today.getDate() + index);
//     return {
//       ...item,
//       date: date.toLocaleDateString(),
//     };
//   });
//   const [value, setValue] = React.useState(0);

  
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     console.log(newValue);
//     onDateClick(dates[newValue]);
//   };

//   return (
//     <Box
//       style={{
//         padding: "20px",
//         maxwidth: "745px !important",
//         margin: "0 auto",
//         position: "relative",
//       }}
//     >
//       <CustomPrevArrow
//         onClick={() => setValue(value > 0 ? value - 1 : 0)}
//         sx={{}}
//       />

//       <Tabs
//         sx={{ paddingLeft: "2rem", }}
//         value={value}
//         onChange={(e) => {
//           handleChange(e, value);
//         }}
//         indicatorColor="primary"
//         textColor="primary"
//       >
//         {updatedDates.map((date, index) => (
//           <Tab
//             onClick={() => {
//               setValue(index);
//             }}
//             key={index}
//             label={
//               <div
//                 style={{
//                   textAlign: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "16px",
//                     fontWeight: 700,
//                     lineHeight: "22.4px",
//                     color: "#414146",
//                   }}
//                 >
//                   {date.label}
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "12px",
//                     fontWeight: 400,
//                     lineHeight: "16.8px",
//                     color: "#01A400",
//                   }}
//                 >
//                   {date.slots} Slots Available
//                 </div>
//               </div>
//             }
//             sx={{
//               cursor: "pointer",
//               textAlign: "center",
//               fontFamily: "Lato, sans-serif",
//               padding: "10px",
//               backgroundColor: value === index ? "#e0f7fa" : "#fff",
//               borderRadius: "4px",
//               height: "58.2px",
//               width: "205px",
//             }}
//           />
//         ))}
//       </Tabs>
//       <CustomNextArrow
//         onClick={() =>
//           setValue(value < dates.length - 1 ? value + 1 : dates.length - 1)
//         }
//       />
//     </Box>
//   );
// };

// export default SlotHeader;
import React, { useEffect } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import leftArrow from "./assests/Vector (4).png"; // Corrected the path
import rightArrow from "./assests/Vector (5).png"; // Corrected the path

// Custom Left Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
      width: "48px",
      height: "48px",
      borderRadius: "24px",
      border: "1px solid transparent",
      borderTop: "1px solid #E0E0E4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    onClick={onClick}
  >
    <img src={leftArrow} alt="Previous" />
  </div>
);

// Custom Right Arrow Component
const CustomNextArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <img src={rightArrow} alt="Next" />
  </div>
);

// Main SlotHeader Component
const SlotHeader = ({
  dates = [
    { label: "Today",},
    { label: "Tomorrow" },
    { label: "In 2 Days" },
    { label: "In 3 Days" },
    { label: "In 4 Days" },
    { label: "In 5 Days" },
    { label: "In 6 Days" },
  ],
  setDay,day
}) => {
  const today = new Date();
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const updatedDates = dates.map((item, index) => {
    const date = new Date(today);
 
    date.setDate(today.getDate() + index);
    
    return {
      ...item,
      date: formatDate(date),
    };
  });
  console.log(updatedDates)
  const [value, setValue] = React.useState(0);

  const handleChange = (newIndex) => {
   
    if (newIndex >= 0 && newIndex < dates.length) {
      setValue(newIndex);
      console.log(newIndex);
      setDay(updatedDates[newIndex].date); 
    }
  };

  useEffect(()=>{
    console.log(day);
  },[day])

  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        // overflow: "hidden", 
      }}
    >
      <CustomPrevArrow
       onClick={() => handleChange(value - 1)}
        />

      <Tabs
        sx={{ paddingLeft: "2rem" }}
        value={value}
        onChange={(e) => {
          handleChange(e, value);
        }}
        indicatorColor="primary"
        textColor="primary"
      >
        {updatedDates.map((date, index) => (
          <Tab
          onChange={handleChange}
            key={index}
            label={
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "22.4px",
                    color: "#414146",
                  }}
                >
                {index<=1?date.label: date.date}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16.8px",
                    color: "#01A400",
                  }}
                >
                  {date.slots} Slots Available
                </div>
              </div>
            }
            sx={{
              cursor: "pointer",
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              padding: "10px",
              backgroundColor: value === index ? "#e0f7fa" : "#fff",
              borderRadius: "4px",
              height: "58.2px",
              width: "205px",
            }}
          />
        ))}
      </Tabs>

      <CustomNextArrow
       onClick={() => handleChange(value + 1)}
      />
    </Box>
  );
};

export default SlotHeader;
