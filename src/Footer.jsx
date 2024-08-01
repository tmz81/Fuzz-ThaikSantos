import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";

function Copyright() {
  return (
    <Typography variant="h6" color="text.primary" mt={1}>
      <Link href="mailto:thaik.ttt@gmail.com">thaik.ttt@gmail.com&nbsp;</Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          mt: "10px",
          textAlign: "center",
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Contato
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", 
          alignItems: "center",
          width: "100%",
          pt: { xs: 4, sm: 8 },
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Copyright />
        </Box>
        <Box sx={{ mt: 2, mb: 4 }}>
          {" "}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: "center",
              color: "text.secondary",

            }}
          >
            <IconButton
              color="inherit"
              href="https://www.instagram.com/thaik.ttt/"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
