import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  Box, 
  Container, 
  IconButton, 
  Typography 
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import "./styles.scss";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      maxWidth
      sx={{ 
        height: "500px",
        backgroundColor: "#ffc324",
        paddingTop: "50px",
      }}>
      <Container maxWidth="lg">
        <Box 
          className="flex_FSColumn"
          sx={{ height: "430px" }}>
          <Box className="flexFSSBRow">
            <Typography sx={{ 
              typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" },
              display: { xs: "none", sm: "block", md: "block", lg: "block" }
            }}>
              FAJIG
            </Typography>
            
            <Box>
              <Typography className='footer__link'>Blog</Typography>
              <Typography className='footer__link'
                onClick={() => navigate("/career-consultation-for-software-developers")}>Free Video Training</Typography>
              <Typography className='footer__link'
                onClick={() => navigate("/how-to-find-a-job-in-germany-as-a-software-developer-in-2-months")}>Coaching Program</Typography>
              <Typography className='footer__link'>FAQ</Typography>

              <Typography className='footer__link'>Privacy</Typography>
              <Typography className='footer__link'>Imprint</Typography>
              <a href='https://www.linkedin.com/company/find-a-job-in-germany' target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <LinkedInIcon fontSize='large' sx={{ color: "#0f1922"}}/>
                </IconButton>
              </a>
              <a href='https://www.youtube.com/channel/UCx5rpKOgJ709qisEXAaSbnQ' target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <YouTubeIcon fontSize='large' sx={{ color: "#0f1922"}}/>
                </IconButton>
              </a>
            </Box> 

          </Box>

          <Typography 
            variant='subtitle1' 
            className='flexCenterCenterRow'>
            FAJIG Demo 2024
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer