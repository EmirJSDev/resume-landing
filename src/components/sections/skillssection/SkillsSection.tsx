import React from 'react';
import { Box, Typography, Container, List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  // Приведение типа результата t к string[]
  const skills = t('skills.items', { returnObjects: true }) as string[];

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
        {Array.isArray(skills) && (
          <List
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            {skills.map((skill, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'list-item',
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  padding: 0,
                  marginBottom: '1rem',
                  color: '#ccc',
                  fontSize: '1rem',
                  lineHeight: '1.75',
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
