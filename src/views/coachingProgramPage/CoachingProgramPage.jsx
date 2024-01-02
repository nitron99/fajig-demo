import React from 'react';

import { 
  Box,
  Container, 
  Typography,
  Link,
  Grid,
  Button
} from '@mui/material';

import "./styles.scss";

const CoachingProgramPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        className="flexCenterCenterRow"
        sx={{ backgroundColor: "#f1f1f1", padding: "20px", borderRadius: "20px" , height: "500px", margin: "20px 0px 60px 0px" }}>
        <Typography
          sx={{ typography: { xs: "h5", sm: "h4", md:"h4", lg: "h4" }, textAlign: "center"}}>
          Our Personal Coaching Program for international Tech & IT professionals
        </Typography>
      </Box>

      <Typography
        sx={{ typography: { xs: "h5", sm: "h4", md:"h3", lg: "h3" }, textAlign: "center", margin: "20px 0px 20px 0px"  }}>
        How it works
      </Typography>

      <Typography
        sx={{ typography: { xs: "subtitle2", sm: "subtitle2", md:"subtitle1", lg: "subtitle1" } , margin: "20px 0px 20px 0px" }}>
        You wish to start your career in Germany? Take the next step in your professional life and get paid what you deserve? A better life for yourself and your family? Maybe you have already started looking or applying for jobs, but not gotten any feedback or you failed in the interviews and you're wondering why?
      </Typography>

      <Box className="flexCenterCenterColumn"
        sx={{ 
          backgroundColor: "#f1f1f1", 
          padding: "20px", 
          borderRadius: "20px", 
          margin: "20px 0px 60px 0px", 
          gap: "50px" }}>
        <Typography
          variant='h5'
          sx={{ textAlign: 'center'}}>
          Apply for a seat in our Personal Coaching Program
        </Typography>

        <Typography variant='body1'>We get many requests. That is why you have to watch our&nbsp; 
          <Link href="/how-to-find-a-job-in-germany-as-a-software-developer-in-2-months">
            FREE video training 
          </Link>
          &nbsp;before applying to understand how we work and your investment.
        </Typography>

        <Grid container gap={2}>
          <Grid item xs={12} sm={5.8} md={2.8} lg={2.8} className='coaching__card'>
            <Typography
              variant='subtitle1'
              sx={{ textAlign: 'center', marginBottom: "10px" }}>
              Step 1
            </Typography>
            <Typography
              variant='h6'
              sx={{ textAlign: 'center', marginBottom: "20px" }}>
              Apply
            </Typography>
            <Typography>
              Book your FREE get-to-know call by clicking the button below. Make sure you watched our&nbsp; 
              <Link href="/how-to-find-a-job-in-germany-as-a-software-developer-in-2-months">
                FREE video training 
              </Link>
              &nbsp;before the call to understand how we work and your investment.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5.8} md={2.8} lg={2.8} className='coaching__card'>
            <Typography
              variant='subtitle1'
              sx={{ textAlign: 'center', marginBottom: "10px" }}>
              Step 2
            </Typography>
            <Typography
              variant='h6'
              sx={{ textAlign: 'center', marginBottom: "20px" }}>
              Get2know Call
            </Typography>
            <Typography>
              Our team will call you on Whatsapp for a FREE 10-minute get-to-know call. Here we'll find out if and how we can best support you finding a job in Germany. Make sure you send us your CV before the call.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5.8} md={2.8} lg={2.8} className='coaching__card'>
            <Typography
              variant='subtitle1'
              sx={{ textAlign: 'center', marginBottom: "10px" }}>
              Step 3
            </Typography>
            <Typography
              variant='h6'
              sx={{ textAlign: 'center', marginBottom: "20px" }}>
              Strategy Session
            </Typography>
            <Typography>
              In your FREE 45-minute career strategy session we check on your projects and skills to see if you can join our program. We also explain each step of the program so you understand how it works and why it works.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5.8} md={2.8} lg={2.8} className='coaching__card'>
            <Typography
              variant='subtitle1'
              sx={{ textAlign: 'center', marginBottom: "10px" }}>
              Step 4
            </Typography>
            <Typography
              variant='h6'
              sx={{ textAlign: 'center', marginBottom: "20px" }}>
              Onboarding
            </Typography>
            <Typography>
            If you agree to the roadmap and we're a good fit we make you an offer to join our program. We turn to implementing the steps we showed you together. That way you will land your job in Germany.
            </Typography>
          </Grid>
        </Grid>

        <Button 
          variant='text'
          onClick={() => 
            window.location.href = "https://www.findajobingermany.de/get-to-know-call-with-find-a-job-in-germany"
          }>
          Apply Now
        </Button>
      </Box>

    </Container>
  )
}

export default CoachingProgramPage