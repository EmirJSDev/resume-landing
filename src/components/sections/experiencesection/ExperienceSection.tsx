import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExperienceSection: React.FC = () => {
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
          {t('experience.title')}
        </Typography>

        {/* NextSlack */}
        <Box sx={{ marginBottom: '2rem' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {t('experience.nextSlack')}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9rem',
              color: '#ccc',
              marginBottom: '0.5rem',
            }}
          >
            {t('experience.nextSlackTime')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: '1.75',
              color: '#ccc',
            }}
          >
            {Array.isArray(t('experience.nextSlackDetails', { returnObjects: true }))
              ? (t('experience.nextSlackDetails', { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <React.Fragment key={index}>
                    - {item}
                    <br />
                  </React.Fragment>
                )
              )
              : null}
          </Typography>
        </Box>

        {/* Sport Forum */}
        <Box sx={{ marginBottom: '2rem' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {t('experience.sportForum')}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9rem',
              color: '#ccc',
              marginBottom: '0.5rem',
            }}
          >
            {t('experience.sportForumTime')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: '1.75',
              color: '#ccc',
            }}
          >
            {Array.isArray(t('experience.sportForumDetails', { returnObjects: true }))
              ? (t('experience.sportForumDetails', { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <React.Fragment key={index}>
                    - {item}
                    <br />
                  </React.Fragment>
                )
              )
              : null}
          </Typography>
        </Box>

        {/* Academy */}
        <Box sx={{ marginBottom: '2rem' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {t('experience.academy')}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9rem',
              color: '#ccc',
              marginBottom: '0.5rem',
            }}
          >
            {t('experience.academyTime')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: '1.75',
              color: '#ccc',
            }}
          >
            {Array.isArray(t('experience.academyDetails', { returnObjects: true }))
              ? (t('experience.academyDetails', { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <React.Fragment key={index}>
                    - {item}
                    <br />
                  </React.Fragment>
                )
              )
              : null}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
