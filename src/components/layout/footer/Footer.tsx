import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Фиксированный цвет для секции
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
      }}
    >
      {/* Текст копирайта */}
      <Typography
        variant="body1"
        sx={{
          fontSize: '1rem',
          marginBottom: '1rem',
        }}
      >
        {t('footer.copyright')}
      </Typography>

      {/* Социальные иконки */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        <IconButton
          component={Link}
          href="https://www.instagram.com/emir_qtm/profilecard/?igsh=MXhsNGFraDlydzl6ZQ=="
          target="_blank"
          aria-label="Instagram"
          sx={{
            color: '#fff',
            '&:hover': { color: '#E4405F' }, // Цвет Instagram
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com/in/emir-abdurakhimov-7b008225a"
          target="_blank"
          aria-label="LinkedIn"
          sx={{
            color: '#fff',
            '&:hover': { color: '#0077B5' }, // Цвет LinkedIn
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/EmirJSDev"
          target="_blank"
          aria-label="GitHub"
          sx={{
            color: '#fff',
            '&:hover': { color: '#333' }, // Цвет GitHub
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>

      {/* Дополнительный текст */}
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.875rem',
          color: '#ccc',
        }}
      >
        {t('footer.built')}
      </Typography>
    </Box>
  );
};

export default Footer;
