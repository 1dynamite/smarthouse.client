/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import CloseIcon from "@mui/icons-material/Close";
import "swiper/css";

export default function MySwiper(props) {
  const swiperContainer = (theme) =>
    css({
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: "10",
      position: "fixed",
      left: "0",
      top: "0",
    });

  const slideStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    });

  const imgStyles = (theme) =>
    css({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    });

  const imgContainerStyles = (theme) =>
    css({
      width: "300px",
      height: "300px",
      position: "relative",
    });

  const iconContainerStyles = (theme) =>
    css({
      display: "flex",
      padding: "1rem",
      width: "max-content",
      position: "absolute",
      top: "0",
      right: "0",
      backgroundColor: "rgba(0,0,0,0.2)",
      color: "white",
    });

  return props.currentIndex === null ? (
    ""
  ) : (
    <div css={swiperContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onInit={(swiper) => {
          swiper.slideTo(props.currentIndex, 0);
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.windows.map((src, index) => (
          <SwiperSlide key={index}>
            <div css={slideStyles}>
              <div css={imgContainerStyles} onClick={props.onCloseSwiper}>
                <div css={iconContainerStyles}>
                  <CloseIcon />
                </div>

                <img alt="" src={src} css={imgStyles} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
