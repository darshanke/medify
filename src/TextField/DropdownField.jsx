import { Select, MenuItem, FormControl, InputAdornment, IconButton } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import location from "../HeroSection/images/Location marker.png";

const DropdownField = ({
  orginalState,
  helpertext,
  changeUi,
  onSelect,
}) => {
  const [value, setValue] = useState("");

  const handleForm = (value) => {
    console.log("Selected Value:", value);
    setValue(value); 
    onSelect(value);
  };

  return (
    <FormControl
      sx={{
        width: "285px",
        height: "50px",
        border: "1px solid #F0F0F0",
      }}
    >
      <Select
        value={value}
        onChange={(e) => handleForm(e.target.value)}
        displayEmpty
        startAdornment={
          <InputAdornment position="start">
            <IconButton>
              {!changeUi ? <SearchIcon /> : <img src={location} alt="icon" />}
            </IconButton>
          </InputAdornment>
        }
      >
        <MenuItem value="" disabled>
          {helpertext}
        </MenuItem>
        {orginalState.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownField;
