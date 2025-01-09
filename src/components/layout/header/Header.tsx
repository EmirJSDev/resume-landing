import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Используем breakpoint для мобильных устройств
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

  const navItems = [
    { id: "about", label: t("header.about") },
    { id: "experience", label: t("header.experience") },
    { id: "skills", label: t("header.skills") },
    { id: "contacts", label: t("header.contacts") },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#121212",
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
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
                xs: "1rem",
                sm: "1.25rem",
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
                aria-label="open menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                keepMounted
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => {
                      handleMenuClose();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    toggleLanguage();
                  }}
                >
                  {t("header.switchTo")}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: theme.spacing(3) }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontSize: "1rem",
                  }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
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
