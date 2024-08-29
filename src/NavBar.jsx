import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  MenuItem,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";

const sections = [
  { id: "bio", label: "Bio" },
  { id: "telas", label: "Telas" },
  { id: "tattoos", label: "Tattoos" },
  { id: "creativeProcess", label: "Processo Criativo" },
  { id: "contact", label: "Contato" },
];

function NavBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
      setOpen(false);
    }
  };

  const renderMenuItems = () =>
    sections.map(({ id, label }) => (
      <MenuItem
        key={id}
        onClick={() => scrollToSection(id)}
      >
        <Typography variant="h5" color="text.primary">
          {label}
        </Typography>
      </MenuItem>
    ));

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={(theme) => ({
              display: "flex",
              justifyContent: { xs: "space-between", md: "space-evenly" },
              alignItems: "center",
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {renderMenuItems()}
            </Box>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { md: "none" } }}>
              <Button
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ minWidth: "60vw", p: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  {renderMenuItems()}
                  <Divider />
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default NavBar;
