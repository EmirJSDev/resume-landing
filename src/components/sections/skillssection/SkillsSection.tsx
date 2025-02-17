import React from "react";
import { Box, Typography, Container, List, ListItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import useResponsive from "../../../hooks/useResponsive";

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  const { isDownMd } = useResponsive(); // ✅ Только проверяем 900px

  // Получаем массив навыков
  const skills = t("skills.items", { returnObjects: true }) as string[];

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: "4rem 0",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "970px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Заголовок секции */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "1rem",
            color: "#ccc",
            letterSpacing: "0.1rem",
            marginBottom: "1.5rem",
          }}
        >
          {t("skills.title")}
        </Typography>

        {/* Список навыков */}
        {Array.isArray(skills) && (
          <List
            sx={{
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: isDownMd ? "1fr" : "1fr 1fr", // ✅ 2 колонки при `>= 900px`, 1 при `< 900px`
              gap: "1rem",
            }}
          >
            {skills.map((skill, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  padding: 0,
                  marginBottom: "0.75rem",
                  color: "#ccc",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                }}
              >
                {skill}
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </Box>
  );
};

export default SkillsSection;
