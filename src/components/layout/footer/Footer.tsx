import React from "react";
import { Box, Typography, Link, IconButton, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import useResponsive from "../../../hooks/useResponsive";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { isXs } = useResponsive(); // ✅ Используем адаптивность

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: isXs ? "1.5rem 0" : "2rem 0", // ✅ Меньше отступы на мобильных
        textAlign: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "970px",
          margin: "0 auto",
          padding: isXs ? "0 1rem" : "0 2rem",
        }}
      >
        {/* Текст копирайта */}
        <Typography
          variant="body1"
          sx={{
            fontSize: isXs ? "0.9rem" : "1rem",
            marginBottom: "1rem",
          }}
        >
          {t("footer.copyright")}
        </Typography>

        {/* Социальные иконки (ВСЕГДА В СТРОКУ) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem", // ✅ Расстояние между иконками фиксированное
            marginBottom: "1rem",
          }}
        >
          {[
            {
              href: "https://www.instagram.com/emir_qtm/profilecard/?igsh=MXhsNGFraDlydzl6ZQ==",
              icon: <InstagramIcon />,
              color: "#E4405F",
              label: "Instagram",
            },
            {
              href: "https://linkedin.com/in/emir-abdurakhimov-7b008225a",
              icon: <LinkedInIcon />,
              color: "#0077B5",
              label: "LinkedIn",
            },
            {
              href: "https://github.com/EmirJSDev",
              icon: <GitHubIcon />,
              color: "#333",
              label: "GitHub",
            },
          ].map(({ href, icon, color, label }, index) => (
            <IconButton
              key={index}
              component={Link}
              href={href}
              target="_blank"
              aria-label={label}
              sx={{
                color: "#fff",
                transition: "color 0.3s ease",
                "&:hover": { color: color },
                fontSize: "2rem", // ✅ Размер иконок остается одинаковым
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>

        {/* Дополнительный текст */}
        <Typography
          variant="body2"
          sx={{
            fontSize: isXs ? "0.75rem" : "0.875rem",
            color: "#ccc",
          }}
        >
          {t("footer.built")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
