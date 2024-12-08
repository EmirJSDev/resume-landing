import React from 'react';
import { Box, Typography, Avatar, Link, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        padding: '4rem 0',
        paddingTop: '10rem', // Добавлен красивый отступ сверху
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
        {/* Аватар */}
        <Avatar
          src="/src/assets/images/avatar.JPG"
          sx={{
            width: '200px',
            height: '200px',
            border: '3px solid #ff5722',
            margin: '0 auto 1.5rem auto',
          }}
        />

        {/* Приветствие */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: '2rem',
            marginBottom: '0.5rem',
          }}
        >
          {t('hero.welcome')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 400,
            marginBottom: '1.5rem',
            color: '#ccc',
          }}
        >
          {t('hero.description')}
        </Typography>

        {/* Социальные ссылки */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '1rem',
          }}
        >
          <Link
            href="https://instagram.com"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#fff',
              fontSize: '1rem',
              gap: '0.5rem',
              textDecoration: 'none',
              '&:hover': { color: '#E4405F' },
            }}
          >
            <InstagramIcon /> Instagram
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#fff',
              fontSize: '1rem',
              gap: '0.5rem',
              textDecoration: 'none',
              '&:hover': { color: '#0077B5' },
            }}
          >
            <LinkedInIcon /> LinkedIn
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#fff',
              fontSize: '1rem',
              gap: '0.5rem',
              textDecoration: 'none',
              '&:hover': { color: '#333' },
            }}
          >
            <GitHubIcon /> GitHub
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
