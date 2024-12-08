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
        backgroundColor: '#121212',
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '1rem',
          marginBottom: '1rem',
        }}
      >
        {t('footer.copyright')}
      </Typography>
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
          href="https://instagram.com"
          target="_blank"
          sx={{ color: '#fff', '&:hover': { color: '#E4405F' } }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: '#fff', '&:hover': { color: '#0077B5' } }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com"
          target="_blank"
          sx={{ color: '#fff', '&:hover': { color: '#333' } }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
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
