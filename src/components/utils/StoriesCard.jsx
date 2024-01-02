import React from 'react'

import { 
  Box, Typography 
} from '@mui/material';

import "../../global.scss";

const StoriesCard = ({videoTitle, videoLink, title, challenge, solution}) => {
  return (
    <Box
      className="flexCenter_Column"
      sx={{ padding: "10px", backgroundColor: "#f1f1f1", borderRadius: "20px", height: "100%"  }}>
      <iframe
        title={videoTitle}
        src={videoLink}
        allow="autoplay; encrypted-media"
        allowfullscreen
        frameborder="0"
        data-gtm-yt-inspected-31354437_13="true"
        style={{
          width: "100%",
          height: "300px", 
          borderRadius: "12px" 
        }}
        />

      <Typography
        sx={{ typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5" }, marginBottom: "20px"}}>
        {title}
      </Typography>

      <Typography
        sx={{ typography: { xs: "body1", sm: "body1", md: "subtitle2", lg: "subtitle2" }, color: "grey" }}>
        <span style={{ color: "black" }}>Challenge:</span>&nbsp;{challenge}
      </Typography>

      <Typography
        sx={{ typography: { xs: "body1", sm: "body1", md: "subtitle2", lg: "subtitle2" }, color: "grey" }}>
        <span style={{ color: "black" }}>Solution:</span>&nbsp;{solution}
      </Typography>


    </Box>
  )
}

export default StoriesCard