import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  Box,
  Button,
  Container, 
  Grid, 
  IconButton, 
  Typography
} from '@mui/material';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Partner1 from "../../assets/icons/partner1.png";
import Partner2 from "../../assets/icons/partner2.png";
import Partner3 from "../../assets/icons/partner3.png";

import StoriesCard from '../../components/utils/StoriesCard';

import "./styles.scss";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container 
      maxWidth="lg">
      <Box 
        className="flexCenterCenterColumn"
        sx={{ height: "calc(100vh - 72px)", gap: "50px"}}>
        <Typography
          sx={{ typography: { xs: "h4", sm: "h3", md: "h2", lg: "h2"}, textAlign: "center" }}>
          Find your job<br/> in <span style={{ color: "#ffc324"}}>Germany.</span>
        </Typography>
        <Typography
          sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5"}, textAlign: "center", maxWidth: "670px", color: "#545454" }}>
          We coach international Tech & IT professionals to land a job in Germany.
        </Typography>

        <Button
          variant='text'
          onClick={() => navigate("/career-consultation-for-software-developers")}>
          Let's Talk
        </Button>
      </Box>

      <Box
        className="home__down">
        <IconButton
          onClick={() => {
            window.scrollTo({
              top: 800, 
              behavior: 'smooth'
            });
          }}>
          <ArrowDownwardIcon fontSize='large' />
        </IconButton>
      </Box>

      <Box
        className="flexCenterCenterRow">
        <iframe
          src={"https://www.youtube.com/embed/HQNEt41-8qc?rel=0&controls=1&autoplay=0&mute=0&start=0&enablejsapi=1&origin=https%3A%2F%2Fwww.findajobingermany.de"}
          allow="autoplay; encrypted-media"
          allowfullscreen
          frameborder="0"
          id="415294351"
          data-gtm-yt-inspected-31354437_13="true"
          title="Looking for a job in Germany in Tech & IT?"
          style={{
            width: "100%",
            height: "70vh", 
            borderRadius: "20px" 
          }}
          >
        </iframe>
      </Box>

        
      <Typography 
        variant='h4'
        sx={{ 
          marginTop: "150px", 
          marginBottom: "50px", 
          textAlign: "center" 
        }}>
        Success stories from our clients
      </Typography>

      <Grid container gap={2}>
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

        <Grid item xs={12} sm={12} md={5.8} lg={5.8}>
          <StoriesCard 
            videoLink={"https://www.youtube.com/embed/05igpSmykRA?rel=0&controls=1&autoplay=0&mute=0&start=0&enablejsapi=1&origin=https%3A%2F%2Fwww.findajobingermany.de"}
            videoTitle={"How this Data Scientist from India cracked the interview process with a German company."}
            title={"Shekhar: Senior Data Scientist from Bangalore, India with 15+ years of experience"}
            challenge={"After working for different MNCs in India for many years Shekhar wanted to change his life style and move to Germany with his family."}
            solution={"He signed up with us end of 2022. Beginning of 2023 he had his job offer from a company in Germany and moved to Hamburg."}
            />
        </Grid>

        <Grid item xs={12} sm={12} md={5.8} lg={5.8}>
          <StoriesCard 
            videoLink={"https://www.youtube.com/embed/ZseZKXip_tY?rel=0&controls=1&autoplay=0&mute=0&start=5&enablejsapi=1&origin=https%3A%2F%2Fwww.findajobingermany.de"}
            videoTitle={"How to land several tech job offers from companies in Germany."}
            title={"Ali: Fullstack JavaScript Developer (React/Node) from Lahore, Pakistan with 8+ years of experience"}
            challenge={"Ali wanted to get a job in Germany but did not know where to start! He needed support in CV writing and learn how to apply right."}
            solution={"He signed up with us in September 2021. 8 weeks later he got could choose between 3 different offers."}
            />
        </Grid>


      </Grid>

      <Box 
        sx={{ 
          backgroundColor: "#f1f1f1", 
          borderRadius: "20px",
          padding: "20px",
          margin: "40px 0px 40px 0px",
          gap: "20px"
        }}
        className="flexCenterCenterColumn">
        <Typography
          sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5"}}}>
            Find out how you can work with us!
        </Typography>
        <Typography>
          Apply for our Personal Coaching Program by booking your FREE get-to-know call.
        </Typography>

        <Button
          variant='text'
          onClick={() => navigate("/career-consultation-for-software-developers")}>
          Schedule now
        </Button>
      </Box>

      <Typography 
        variant='h4'
        sx={{ 
          marginTop: "150px", 
          marginBottom: "50px", 
          textAlign: "center" 
        }}>
        You probably face one of these challenges
      </Typography>

      <Grid container gap={2} className='flexCenterCenterRow'>
        <Grid item xs={12} sm={12} md={3.8} lg={3.8} className='flexCenterCenterRow'>
          <Box className="flex_SBColumn" sx={{ padding: "20px", backgroundColor: "#f1f1f1", borderRadius: "20px", gap: "20px" }}>
            <Typography 
              sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5"}, textAlign: "center"}}>01</Typography>
            <Typography 
              sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5"}, textAlign: "center"}}>Job Applications</Typography>
            <Typography>Either you already applied for 20 jobs or more and didn't get any replies. Then you probably didn’t position yourself right, meaning you didn't present yourself right in your CV and cover letter and didn't apply right.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3.8} lg={3.8} className='flexCenterCenterRow'>
          <Box className="flex_SBColumn" sx={{ padding: "20px", backgroundColor: "#f1f1f1", borderRadius: "20px", gap: "20px" }}>
            <Typography 
              sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5"}, textAlign: "center"}}>02</Typography>
            <Typography 
              sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5"}, textAlign: "center"}}>Interviews</Typography>
            <Typography>Either you already applied for 20 jobs or more and didn't get any replies. Then you probably didn’t position yourself right, meaning you didn't present yourself right in your CV and cover letter and didn't apply right.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3.8} lg={3.8} className='flexCenterCenterRow'>
          <Box className="flex_SBColumn" sx={{ padding: "20px", backgroundColor: "#f1f1f1", borderRadius: "20px", gap: "20px" }}>
            <Typography 
              sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5"}, textAlign: "center"}}>03</Typography>
            <Typography 
              sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5"}, textAlign: "center"}}>Never applied</Typography>
            <Typography>Either you already applied for 20 jobs or more and didn't get any replies. Then you probably didn’t position yourself right, meaning you didn't present yourself right in your CV and cover letter and didn't apply right.</Typography>
          </Box>
        </Grid>
      </Grid>

    

      <Typography 
        variant='h4'
        sx={{ 
          marginTop: "150px", 
          marginBottom: "50px", 
          textAlign: "center" 
        }}>
        Our Partners
      </Typography>

      <Grid container gap={2} rowGap={6} className='flexCenterCenterRow' sx={{ marginBottom: "150px" }}>
        <Grid item xs={12} sm={12} md={3.8} lg={3.8} className='flexCenterCenterRow'>
          <img
            src={Partner1}
            alt="partner-1"
            width={100}
            />  
        </Grid>
        <Grid item xs={12} sm={12} md={3.8} lg={3.8} className='flexCenterCenterRow'>
          <img
            src={Partner2}
            alt="partner-2"
            width={216}
            />  
        </Grid>
        <Grid item xs={12} sm={12} md={3.8} lg={3.8} className='flexCenterCenterRow'>
          <img
            src={Partner3}
            alt="partner-3"
            width={216}
            />  
        </Grid>
      </Grid>

      
      <Box 
        sx={{ 
          backgroundColor: "#f1f1f1", 
          borderRadius: "20px",
          padding: "20px",
          margin: "40px 0px 100px 0px",
          gap: "20px"
        }}
        className="flexCenterCenterColumn">
        <Typography
          sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5" }}}>
            Are you a Tech & IT professional and do you want to work in Germany?
        </Typography>
        <Typography>
          Get in touch with us and apply for our Personal Coaching Program by booking your FREE get-to-know call.
        </Typography>

        <Button
          variant='text'
          onClick={() => navigate("/career-consultation-for-software-developers")}>
          Apply now
        </Button>
      </Box>

      

    </Container>
  )
}

export default HomePage;