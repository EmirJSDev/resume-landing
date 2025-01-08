import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, Container, CircularProgress } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import useResponsive from '../../../hooks/useResponsive';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const { isXs } = useResponsive();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const validationSchema = yup.object({
    name: yup.string().required(`${t('contact.form.name')} ${t('contact.form.required')}`),
    email: yup
      .string()
      .email(`${t('contact.form.email')} ${t('contact.form.invalid')}`)
      .required(`${t('contact.form.email')} ${t('contact.form.required')}`),
    message: yup.string().required(`${t('contact.form.message')} ${t('contact.form.required')}`),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setFeedback(null);
      try {
        // Изменяем URL для PHP
        await axios.post('https://abdurakhimov.info/sendmail.php', values, {
          headers: { 'Content-Type': 'application/json' },
        });
        setFeedback(t('contact.form.success'));
        resetForm();
      } catch (error) {
        console.error('Error:', error);
        setFeedback(t('contact.form.error'));
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      id="contacts"
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        padding: '4rem 0',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '970px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: '2rem',
            color: '#fff',
            marginBottom: '2rem',
            letterSpacing: '0.1rem',
          }}
        >
          {t('contact.title')}
        </Typography>
        <Box
          sx={{
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: isXs ? 'column' : 'row',
              alignItems: 'center',
              gap: isXs ? '0.25rem' : '0.5rem',
              textAlign: isXs ? 'center' : 'left',
            }}
          >
            <TelegramIcon sx={{ color: '#1DA1F2', fontSize: isXs ? '3rem' : '2rem' }} />
            <Link
              href="https://t.me/Emir_Q"
              target="_blank"
              sx={{
                color: '#1DA1F2',
                fontSize: '1rem',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {t('contact.telegram')}: @Emir_Q
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isXs ? 'column' : 'row',
              alignItems: 'center',
              gap: isXs ? '0.25rem' : '0.5rem',
              textAlign: isXs ? 'center' : 'left',
            }}
          >
            <EmailIcon sx={{ color: '#fff', fontSize: isXs ? '3rem' : '2rem' }} />
            <Link
              href="mailto:abdurakhimovemir@gmail.com"
              sx={{
                color: '#fff',
                fontSize: '1rem',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {t('contact.email')}: abdurakhimovemir@gmail.com
            </Link>
          </Box>
        </Box>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label={t('contact.form.name')}
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{
              backgroundColor: '#1e1e1e',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                borderRadius: '12px',
              },
              '& .MuiFormLabel-root': {
                color: '#ccc',
              },
            }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label={t('contact.form.email')}
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              backgroundColor: '#1e1e1e',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                borderRadius: '12px',
              },
              '& .MuiFormLabel-root': {
                color: '#ccc',
              },
            }}
          />
          <TextField
            fullWidth
            id="message"
            name="message"
            label={t('contact.form.message')}
            variant="outlined"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={{
              backgroundColor: '#1e1e1e',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                borderRadius: '12px',
              },
              '& .MuiFormLabel-root': {
                color: '#ccc',
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: loading ? '#aaa' : '#3f51b5',
              color: '#fff',
              margin: '0 auto',
              display: 'block',
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              fontWeight: '500',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: loading ? '#aaa' : '#303f9f',
              },
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : t('contact.form.submit')}
          </Button>
        </Box>
        {feedback && (
          <Typography
            variant="body1"
            sx={{
              marginTop: '1rem',
              color: feedback === t('contact.form.error') ? '#ff5722' : '#4caf50',
            }}
          >
            {feedback}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ContactSection;
