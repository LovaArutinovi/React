import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { slides } from "untils/slides";
import styled, { createGlobalStyle } from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const MainSlider = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <Slider>
      <SliderStyles />
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((item) => (
            <>
              <SwiperSlide>
                <Slide href={item}>
                  <img alt="img1" src={item} />
                </Slide>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </LightGallery>
    </Slider>
  );
};
const SliderStyles = createGlobalStyle`
	.lg-react-element{
		display: flex;
	}
`;
const Slider = styled.div`
  width: 900px;
  height: 430px;
  z-index: 999;
`;
const Slide = styled.a`
  max-width: 500px;
  height: min(100%, 430px);
  overflow: hidden;
  & img {
    max-width: 100%;
    height: min(100%, 430px);
  }
`;
