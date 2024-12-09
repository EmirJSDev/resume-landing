import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Container, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@mui/material";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900)); // Проверка разрешения
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const toggleLanguage = async () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    try {
      await i18n.changeLanguage(newLang);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#121212",
        boxShadow: "none",
        zIndex: 10,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "970px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Логотип */}
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "1rem", // На маленьких экранах
                sm: "1.25rem", // На больших экранах
              },
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: "0.1rem",
              cursor: "pointer",
            }}
            onClick={() => scrollToSection("hero")}
          >
            {t("header.title")}
          </Typography>

          {isMobile ? (
            <>
              {/* Бургер-меню */}
              <IconButton
                edge="end"
                color="inherit"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => { handleMenuClose(); scrollToSection("about"); }}>
                  {t("header.about")}
                </MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); scrollToSection("experience"); }}>
                  {t("header.experience")}
                </MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); scrollToSection("skills"); }}>
                  {t("header.skills")}
                </MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); scrollToSection("contacts"); }}>
                  {t("header.contacts")}
                </MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); toggleLanguage(); }}>
                  {t("header.switchTo")}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
              }}
            >
              {/* Навигация */}
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
                onClick={() => scrollToSection("about")}
              >
                {t("header.about")}
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
                onClick={() => scrollToSection("experience")}
              >
                {t("header.experience")}
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
                onClick={() => scrollToSection("skills")}
              >
                {t("header.skills")}
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
                onClick={() => scrollToSection("contacts")}
              >
                {t("header.contacts")}
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
                onClick={toggleLanguage}
              >
                {t("header.switchTo")}
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
