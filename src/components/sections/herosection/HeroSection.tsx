import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";
import useResponsive from "../../../hooks/useResponsive";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { isDownMd, isXs } = useResponsive(); // Используем `isDownMd` для соц. ссылок и `isXs` для заголовка

  const socialLinks = [
    {
      href: "https://www.instagram.com/emir_qtm/profilecard/?igsh=MXhsNGFraDlydzl6ZQ==",
      icon: <InstagramIcon />,
      label: "Instagram",
      hoverColor: "#E4405F",
    },
    {
      href: "https://linkedin.com/in/emir-abdurakhimov-7b008225a",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      hoverColor: "#0077B5",
    },
    {
      href: "https://github.com/EmirJSDev",
      icon: <GitHubIcon />,
      label: "GitHub",
      hoverColor: "#333",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: "4rem 0",
        paddingTop: "10rem",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "970px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Оптимизированный аватар */}
        <img
          src="/images/avatar.webp"
          alt="Emir Abdurakhimov"
          loading="lazy"
          width={isXs ? 120 : isDownMd ? 160 : 200} // Уменьшаем на мобильных
          height={isXs ? 120 : isDownMd ? 160 : 200}
          style={{
            display: "block",
            borderRadius: "50%",
            border: "3px solid #ff5722",
            margin: "0 auto 1.5rem auto",
          }}
        />

        {/* Приветствие */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "1.5rem", // На самых маленьких экранах (< 600px)
              sm: "1.8rem",
              md: "2rem",
            },
            marginBottom: "0.5rem",
          }}
        >
          {t("hero.welcome")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "1rem", // Меньше текст на мобильных
              sm: "1.1rem",
              md: "1.25rem",
            },
            fontWeight: 400,
            marginBottom: "1.5rem",
            color: "#ccc",
          }}
        >
          {t("hero.description")}
        </Typography>

        {/* Социальные ссылки */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isDownMd ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {socialLinks.map(({ href, icon, label, hoverColor }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                fontSize: isXs ? "0.9rem" : "1rem",
                gap: "0.5rem",
                textDecoration: "none",
                "&:hover": { color: hoverColor },
              }}
            >
              {icon} {label}
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
