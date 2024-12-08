import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  const skills = t('skills.items', { returnObjects: true });

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
        {/* Заголовок секции */}
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
          {t('skills.title')}
        </Typography>

        {/* Список навыков */}
        {Array.isArray(skills) &&
          skills.map((skill, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: '#ccc',
                marginBottom: '1rem',
              }}
            >
              - {skill}
            </Typography>
          ))}
      </Container>
    </Box>
  );
};

export default SkillsSection;
