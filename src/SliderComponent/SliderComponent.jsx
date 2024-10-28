import "./SliderCmponet.css";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, } from "swiper/modules";
import SlideOne from "./Assets/SlideOne.png";
import SlideTwo from "./Assets/SliderTwo.png";
import SliderCard from "./SliderCard";

export default function SliderComponent() {
  return (
    <Box
      sx={{
        position: "relative",
        top: "8rem",
        marginTop: "4rem",
        textAlign: "center",
        display: 'flex', 
        alignItems :  'center',
        justifyContent: 'center'
        // height: '250px'
        // height: '360px',
      }}
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        modules={[Pagination, Navigation,Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // console.log(className)
            if (index < 3) {
              return `<span class="${className}"></span>`;
            }
            return "";
          },
        }}
        className="mySwiper"
        autoplay={{
          delay: 4000,
        }}
  
      >
        <SwiperSlide>
          <SliderCard img={SlideOne} alt="firstslide" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={SlideTwo} alt="secondslide" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={SlideOne} alt="firstslide" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={SlideTwo} alt="secondslide" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
