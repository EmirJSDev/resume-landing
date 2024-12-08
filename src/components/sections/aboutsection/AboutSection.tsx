import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
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
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '1rem',
            color: '#ccc',
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
