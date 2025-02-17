import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container,
  CircularProgress,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";
import useResponsive from "../../../hooks/useResponsive";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const { isXs, isSm, isDownMd } = useResponsive(); // ✅ Добавил адаптивность
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const validationSchema = yup.object({
    name: yup.string().required(""),
    email: yup.string().email("").required(""),
    message: yup.string().required(""),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setFeedback(null);
      try {
        await axios.post("https://abdurakhimov.info/backend/sendmail.php", values, {
          headers: { "Content-Type": "application/json" },
        });
        setFeedback(t("contact.form.success"));
        resetForm();
      } catch (error) {
        console.error("Error:", error);
        setFeedback(t("contact.form.error"));
      } finally {
        setLoading(false);
      }
    },
  });

  const renderTextField = (id: keyof FormValues, label: string, multiline = false, rows = 1) => (
    <TextField
      fullWidth
      id={id}
      name={id}
      label={label}
      variant="outlined"
      value={formik.values[id]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={false}
      helperText=""
      multiline={multiline}
      rows={rows}
      sx={{
        backgroundColor: "#1e1e1e",
        borderRadius: "12px",
        "& .MuiOutlinedInput-root": {
          color: "#fff",
          borderRadius: "12px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#666",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#999",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3f51b5",
          },
        },
        "& .MuiFormLabel-root": {
          color: "#ccc",
        },
      }}
    />
  );

  return (
    <Box
      id="contacts"
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: isXs ? "3rem 0" : "4rem 0", // ✅ Меньше отступы на мобилках
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "970px",
          margin: "0 auto",
          textAlign: "center",
          padding: isXs ? "0 1rem" : isSm ? "0 2rem" : "0 3rem", // ✅ Гибкие отступы
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: isXs ? "1.5rem" : "2rem", // ✅ Меньше заголовок на маленьких экранах
            color: "#fff",
            marginBottom: "2rem",
            letterSpacing: "0.1rem",
          }}
        >
          {t("contact.title")}
        </Typography>

        {/* Контактные данные */}
        <Box
          sx={{
            marginBottom: "3rem",
            display: "flex",
            flexDirection: isDownMd ? "column" : "row", // ✅ На мобилках вертикально
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {[
            {
              icon: <TelegramIcon />,
              href: "https://t.me/Emir_Q",
              text: t("contact.telegram") + ": @Emir_Q",
            },
            {
              icon: <EmailIcon />,
              href: "mailto:abdurakhimovemir@gmail.com",
              text: t("contact.email") + ": abdurakhimovemir@gmail.com",
            },
          ].map(({ icon, href, text }, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: isXs ? "column" : "row",
                alignItems: "center",
                gap: isXs ? "0.5rem" : "1rem",
                textAlign: isXs ? "center" : "left",
              }}
            >
              {React.cloneElement(icon, {
                sx: {
                  color: href.includes("mailto") ? "#fff" : "#1DA1F2",
                  fontSize: isXs ? "2rem" : "2.5rem", // ✅ Уменьшаем иконки на мобилках
                },
              })}
              <Link
                href={href}
                target="_blank"
                sx={{
                  color: href.includes("mailto") ? "#fff" : "#1DA1F2",
                  fontSize: "1rem",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {text}
              </Link>
            </Box>
          ))}
        </Box>

        {/* Форма */}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: isXs ? "100%" : "600px", // ✅ На мобилках форма шире
            margin: "0 auto",
          }}
        >
          {renderTextField("name", t("contact.form.name"))}
          {renderTextField("email", t("contact.form.email"))}
          {renderTextField("message", t("contact.form.message"), true, 4)}

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: loading ? "#aaa" : "#3f51b5",
              color: "#fff",
              margin: "0 auto",
              padding: "0.5rem 1rem",
              fontSize: "0.85rem",
              fontWeight: "500",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: loading ? "#aaa" : "#303f9f",
              },
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : t("contact.form.submit")}
          </Button>
        </Box>

        {/* Сообщение о результате */}
        {feedback && (
          <Typography
            variant="body1"
            sx={{
              marginTop: "1rem",
              color: feedback === t("contact.form.error") ? "#ff5722" : "#4caf50",
            }}
            aria-live="polite"
          >
            {feedback}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ContactSection;
