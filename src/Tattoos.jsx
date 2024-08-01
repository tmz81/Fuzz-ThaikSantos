import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { imgTattos } from "./Content";

export default function Tattoos() {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  const handleOpen = (img) => {
    setCurrentImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      id="tattoos"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: "center",
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Tattoos
        </Typography>
      </Box>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, 
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {imgTattos.map((img, index) => (
            <Grid
              item
              key={img.alt}
              xs={12}
              SM={6}
              md={4}
              sx={{ display: "flex" }}
            >
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      display: "block",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      mx: "auto",
                      cursor: "pointer",
                    }}
                    src={img.src}
                    alt={img.alt}
                    onClick={() => handleOpen(img)}
                  />
                </Card>
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ position: "relative", width: "80%", height: "80%" }}>
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Modal>
    </Container>
  );
}
