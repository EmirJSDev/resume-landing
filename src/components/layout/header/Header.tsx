import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Обработчик прокрутки
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    try {
      await i18n.changeLanguage(newLang);
      console.log(`Language switched to ${newLang}`);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: '#121212',
        boxShadow: 'none',
        zIndex: 10,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '970px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Логотип */}
          <Typography
            variant="h6"
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: '0.1rem',
              cursor: 'pointer',
            }}
            onClick={() => scrollToSection('hero')}
          >
            {t('header.title')}
          </Typography>

          {/* Навигация */}
          <Box sx={{ display: 'flex', gap: '2rem' }}>
            <Button
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontSize: '0.875rem',
              }}
              onClick={() => scrollToSection('about')}
            >
              {t('header.about')}
            </Button>
            <Button
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontSize: '0.875rem',
              }}
              onClick={() => scrollToSection('experience')}
            >
              {t('header.experience')}
            </Button>
            <Button
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontSize: '0.875rem',
              }}
              onClick={() => scrollToSection('skills')}
            >
              {t('header.skills')}
            </Button>
            <Button
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontSize: '0.875rem',
              }}
              onClick={() => scrollToSection('contacts')}
            >
              {t('header.contacts')}
            </Button>
          </Box>

          {/* Кнопка переключения языка */}
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button sx={{ color: '#fff' }} onClick={toggleLanguage}>
              {t('header.switchTo')}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
