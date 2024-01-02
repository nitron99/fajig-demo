import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { 
  Container, 
  Grid, 
  Typography 
} from '@mui/material';

import Logo from "../../assets/icons/logo.png";

import "./styles.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container 
      maxWidth="lg">
      <Grid container 
        className="flexCenterSBRow"
        sx={{ minHeight: "72px" }}>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <img
            src={Logo} 
            alt="fajig-logo"
            style={{ cursor: "pointer" }}
            onClick={() => navigate('/')}
            />
        </Grid>
        
        <Grid item xs={12} sm={"auto"} md={"auto"} lg={"auto"}
          className="flexCenterCenterRow"
          sx={{ gap: "20px"}}>
          <Typography
            className='navbar__link'
            sx={{ 
              typography: { xs: "body2", sm: "subtitle2", md: "subtitle2", lg: "subtitle2" },
              backgroundColor: location.pathname === "/career-consultation-for-software-developers" && "#fce095"}}
            onClick={() => navigate('/career-consultation-for-software-developers')}>
            Coaching Program
          </Typography>
          <Typography
            className='navbar__link'
            sx={{ 
              typography: { xs: "body2", sm: "subtitle2", md: "subtitle2", lg: "subtitle2" },
              backgroundColor: location.pathname === "/how-to-find-a-job-in-germany-as-a-software-developer-in-2-months" && "#fce095"}}
            onClick={() => navigate('/how-to-find-a-job-in-germany-as-a-software-developer-in-2-months')}>
            Free Video Training
          </Typography>
        </Grid>

      </Grid>
      
    </Container>
  )
}

export default NavBar