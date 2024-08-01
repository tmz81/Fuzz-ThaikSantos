import { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { imgTelas } from "./Content";

export default function Telas() {
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
      id="telas"
      sx={{
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
          Telas
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {imgTelas.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "100%",
                  display: "block",
                  maxWidth: "100%",
                  width: "auto",
                  mx: "auto",
                  cursor: "pointer",
                }}
                src={img.src}
                alt={img.alt}
                onClick={() => handleOpen(img)}
              />
            </Card>
          </Grid>
        ))}
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
