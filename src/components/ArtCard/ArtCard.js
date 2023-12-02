import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Widget = styled('div')(({ theme }) => ({
  padding: 10,
  borderRadius: 16,
  width: '88%',
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(63,63,63,0.4)',
  backdropFilter: 'blur(40px)',
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.2)',
  },
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
    height: '100%'
  },
});


export default function ArtCard({title, image, onClick}) {
  return (
    <Box sx={{ mt: 1, width: '100%', overflow: 'hidden' }}>
      <ButtonBase onClick={onClick} style={{ width: '100%' }}>
      <Widget>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
            <img
              alt={title}
              src={image}
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography variant="caption" color="primary" fontWeight={500}>
              Jun Pulse
            </Typography>
            <Typography noWrap>
              <b>{title}</b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25}>
              Hagergna &mdash;
            </Typography>
          </Box>
        </Box>
      </Widget>
      </ButtonBase>
    </Box>
  );
}