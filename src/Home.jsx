import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Box } from "@mui/material";
import Body from "./Body/Body";
import FrequentlyAskedQuestion from "./Body/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Content from "./DownloadSection/Content";
import { SnackarProvider } from "./SnackbarProvider";

const Home = () => {
  const [value, setValue] = useState(0);
  const [changeUi, setUi] = useState(false);
  return (
    <SnackarProvider>
      <Box>
        <Header />
        <Body
          value={value}
          setValue={setValue}
          changeUi={changeUi}
          setUi={setUi}
        />
        <FrequentlyAskedQuestion changeUi={changeUi} />
        <Content />
        <Footer />
      </Box>
    </SnackarProvider>
  );
};

export default Home;
