import { styled, Box } from '@mui/material';


const Banner = () => {
  return (
      <div style={{ width: '100%', height: '50vh', overflow: 'hidden' }}>
          <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>
  );
};


export default Banner;
