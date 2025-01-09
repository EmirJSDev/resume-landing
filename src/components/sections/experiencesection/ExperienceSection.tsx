import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  // Функция для отображения секции опыта
  const renderExperienceItem = (
    titleKey: string,
    timeKey: string,
    detailsKey: string
  ) => {
    const details = t(detailsKey, { returnObjects: true });

    return (
      <Box sx={{ marginBottom: '2rem' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
          }}
        >
          {t(titleKey)}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.9rem',
            color: '#ccc',
            marginBottom: '0.5rem',
          }}
        >
          {t(timeKey)}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: '#ccc',
          }}
        >
          {Array.isArray(details)
            ? (details as string[]).map((item, index) => (
              <React.Fragment key={index}>
                - {item}
                <br />
              </React.Fragment>
            ))
            : null}
        </Typography>
      </Box>
    );
  };

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
          {t('experience.title')}
        </Typography>

        {renderExperienceItem(
          'experience.nextSlack',
          'experience.nextSlackTime',
          'experience.nextSlackDetails'
        )}
        {renderExperienceItem(
          'experience.sportForum',
          'experience.sportForumTime',
          'experience.sportForumDetails'
        )}
        {renderExperienceItem(
          'experience.academy',
          'experience.academyTime',
          'experience.academyDetails'
        )}
      </Container>
    </Box>
  );
};

export default ExperienceSection;
