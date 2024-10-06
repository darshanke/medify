import "./App.css";
import { Box } from "@mui/material";
import CountryCard from "./Components/CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [originallist, setoriginallist] = useState([]);

  const countyData = async () => {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/all`);
      setoriginallist(res.data);
      setList(res.data);
      return res.data;
    } catch (e) {
      console.error("Error fetching data:", e.message);
      setList([]);
    }
  };

  const proccessfilter = (search, debouncetime) => {
    // console.log(search);
    const filter = originallist.filter((item) =>
      item.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setList(filter);
  };

  useEffect(() => {
    countyData();
  }, []);

  return (
    <div className="App">
      <input

        type="text"
        placeholder="Search for countries"
        style={{width: "40%", margin:"1rem"}}
        onChange={(e) => {
          proccessfilter(e.target.value, 500);
        }}
      />
      {list.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <CountryCard countryData={list} />
        </Box>
      ) : null}
    </div>
  );
}

export default App;