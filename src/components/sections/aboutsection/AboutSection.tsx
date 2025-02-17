import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import useResponsive from "../../../hooks/useResponsive";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const { isXs, isSm, isMd } = useResponsive();

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: isXs ? "3rem 0" : "4rem 0", // Меньше отступы на маленьких экранах
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: isMd ? "850px" : "970px", // Уменьшаем контейнер на средних экранах
          margin: "0 auto",
          padding: isXs ? "0 1rem" : isSm ? "0 2rem" : "0 3rem", // Гибкие отступы
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: isXs ? "0.85rem" : isSm ? "0.9rem" : "1rem", // Меньше текст на мобильных
            color: "#ccc",
            letterSpacing: "0.1rem",
            marginBottom: "1.5rem",
          }}
        >
          {t("about.title")}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: isXs ? "1rem" : isSm ? "1.1rem" : "1.25rem",
            marginBottom: "0.5rem",
          }}
        >
          {t("about.headline1")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: isXs ? "0.9rem" : "1rem",
            lineHeight: "1.75",
            color: "#ccc",
            marginBottom: "1.5rem",
          }}
        >
          {t("about.text1")}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: isXs ? "1rem" : isSm ? "1.1rem" : "1.25rem",
            marginBottom: "0.5rem",
          }}
        >
          {t("about.headline2")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: isXs ? "0.9rem" : "1rem",
            lineHeight: "1.75",
            color: "#ccc",
          }}
        >
          {t("about.text2")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: isXs ? "0.9rem" : "1rem",
            lineHeight: "1.75",
            color: "#ccc",
            marginTop: "1.5rem",
          }}
        >
          {t("about.text3")}
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
