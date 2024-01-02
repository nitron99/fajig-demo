import React from 'react';

import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography 
} from '@mui/material';

import StoriesCard from '../../components/utils/StoriesCard';

import "./styles.scss";

const TrainingPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        sx={{ typography: {xs: "h6", sm: "h5", md: "h4", lg: "h4"}, margin: "50px 0px 80px 0px" }}>
        Find your job in Germany as a Software Developer, Cloud/DevOps/Data/ML or Security Engineer, Data Scientist&nbsp;
        <span style={{ color: "#ffc324" }}>in up to 2 months</span>
      </Typography>
     
      <Box 
        className="flexCenterCenterRow"
        sx={{ 
          backgroundColor: "#f1f1f1", 
          borderRadius: "20px",
          height: "600px",
          marginBottom: "100px"
        }}>
        <Typography
          variant='h4'>
          <i>Free Training video</i>
        </Typography>
      </Box>

      <Box 
        className="flexCenterCenterColumn"
        sx={{ 
          backgroundColor: "#f1f1f1", 
          borderRadius: "20px",
          padding: "20px",
          gap: "20px",
          marginBottom: "100px"
        }}>
        <Typography
          variant='subtitle1'>
          You watched the full video and want to learn more about how we can support you in getting a job in Germany?
        </Typography>

        <Button
          onClick={() => 
            window.location.href = "https://www.findajobingermany.de/get-to-know-call-with-find-a-job-in-germany"
          }>
          Let's Talk
        </Button>
      </Box>

      <Typography 
        variant='h4'
        sx={{ 
          marginTop: "150px", 
          marginBottom: "50px", 
          textAlign: "center" 
        }}>
        Case studies from our clients
      </Typography>

      <Grid container gap={2}
        sx={{ marginBottom: "80px"}}>
        <Grid item xs={12} sm={12} md={5.8} lg={5.8}>
          <StoriesCard 
            videoLink={"https://www.youtube.com/embed/si_EmzvakN0?rel=0&controls=1&autoplay=0&mute=0&start=967&enablejsapi=1&origin=https%3A%2F%2Fwww.findajobingermany.de"}
            videoTitle={"How to get 5 interview invitations after 1 week of applying for developer roles in Germany"}
            title={"Meera: Frontend JavaScript Developer (React) from Bangalore, India with 7+ years of experience"}
            challenge={"Meera applied for jobs in Germany for over a year, drafted many job applications but did not get an offer."}
            solution={"She signed up with us in July 2021. 3 months later she got her job offer from a company in Berlin."}
            />
        </Grid>
        <Grid item xs={12} sm={12} md={5.8} lg={5.8}>
          <StoriesCard 
            videoLink={"https://www.youtube.com/embed/VESTTAal4tI?rel=0&controls=0&autoplay=0&mute=0&start=0&enablejsapi=1&origin=https%3A%2F%2Fwww.findajobingermany.de"}
            videoTitle={"How this Java Developer from India landed a job in Germany"}
            title={"Neha: Senior Java Backend Engineer (Spring) from Noida, India with 10+ years of experience"}
            challenge={"Neha, applied for jobs in Germany for over a year, drafted more than 300+ job applications and got 0 invitations to job interviews."}
            solution={"She signed up with us in early 2022. A few months later she had her job offer from a company in Frankfurt."}
            />
        </Grid>
      </Grid>

      <Box 
        className="flexCenterCenterColumn"
        sx={{ 
          backgroundColor: "#f1f1f1", 
          borderRadius: "20px",
          padding: "20px",
          gap: "20px",
          marginBottom: "100px"
        }}>
        <Typography
          variant='h6'>
          Are you a Tech & IT professional and do you want to work in Germany?
        </Typography>

        <Typography
          variant='body1'>
          Apply for our Personal Coaching Program by booking your FREE get-to-know call.
        </Typography>

        <Button
          onClick={() => 
            window.location.href = "https://www.findajobingermany.de/get-to-know-call-with-find-a-job-in-germany"
          }>
          Let's Talk
        </Button>
      </Box>
      
    </Container>
  )
}

export default TrainingPage