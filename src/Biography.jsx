import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { textBio, imgBio } from "./Content";

export default function Biography() {
  return (
    <Container
      id="bio"
      sx={{
        py: {
          xs: 8,
          sm: 16,
        },
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              component="h2"
              variant="h4"
              color="text.primary"
              sx={{ mb: 8, mt: 4 }}
            >
              {textBio.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Sou brasileiro, natural de Recife-PE. Sou artista plástico e
              tatuador, além de arte educador graduado em Artes Visuais pela
              Universidade Federal de Pernambuco (2019).
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Meu trabalho tem como principal característica a estética
              rebuscada e urbana com texturas e pinceladas fluidas. Costumo
              resumir que grito através dos pincéis com gestuais guiados por
              tambores e guitarras distorcidas.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Tanto em telas quanto na tatuagem, minha produção é influenciada
              por movimentos contemporâneos como o neoexpressionismo e
              expressionismo abstrato.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Premiações e exposições coletivas:
              <br />
              - Salão contemporâneo de arte do SESC-PE
              <br />
              - Primeira Semana de Artes Visuais da UFPE
              <br />
              - Ministrante de Oficina na Caixa Cultural PE
              <br />
              - Coletiva Em nome do bem! – Galeria Capibaribe UFPE
              <br />
              - Coletiva Corporatividade - UFAL/Arapiraca
              <br />
              - Prêmio Incubadora de Artistas - Atibaia/SP
              <br />- Prêmio Pernambuco Nação Cultural (Fundarpe)
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", width: "100%" }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                display: { xs: "none", sm: "flex" },
                pointerEvents: "none",
              }}
            >
              {imgBio.map((img, index) => (
                <SwiperSlide key={index}>
                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      display: "block",
                      maxWidth: "100%",
                      width: "auto",
                      mx: "auto",
                    }}
                    src={img.src}
                    alt={img.alt}
                  />
                </SwiperSlide>
              ))}
            </Card>
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
}
