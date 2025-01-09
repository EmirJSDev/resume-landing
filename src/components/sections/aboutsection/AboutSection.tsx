import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Сохраняем фон
        color: '#fff', // Цвет текста
        padding: '4rem 0', // Используем отступы как в старом коде
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '970px', // Центрирование контейнера как в старом коде
          margin: '0 auto',
          padding: theme.spacing(0, 2), // Адаптивные отступы
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '1rem',
            color: '#ccc', // Сохраняем цвет из старого кода
            letterSpacing: '0.1rem',
            marginBottom: '1.5rem',
          }}
        >
          {t('about.title')}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
          }}
        >
          {t('about.headline1')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: '#ccc',
            marginBottom: '1.5rem',
          }}
        >
          {t('about.text1')}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
          }}
        >
          {t('about.headline2')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: '#ccc',
          }}
        >
          {t('about.text2')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: '#ccc',
            marginTop: '1.5rem',
          }}
        >
          {t('about.text3')}
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
