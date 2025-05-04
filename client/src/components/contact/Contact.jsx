import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: '#0b1f2a', color: '#fff', py: 8, px: { xs: 3, md: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="#ccc">
            We’d love to hear from you. Whether you have questions, suggestions, or just want to say hello — here’s how you can reach us.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/image4.png"  style={{ marginLeft:"50%" ,width: '50%', borderRadius: '12px' }}/>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={6}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#112d3b', color: '#fff', textAlign: 'center', py: 4 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: '#1976d2', mx: 'auto', mb: 2 }}>
                <EmailIcon />
              </Avatar>
              <Typography variant="h6">Email Us</Typography>
              <Typography variant="body2" color="#ccc">
                Reach us directly at
              </Typography>
              <Typography variant="body1" mt={1}>
                <a href="mailto:hello@blogsync.io" style={{ color: '#90caf9', textDecoration: 'none' }}>
                  hello@blogsync.io
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#112d3b', color: '#fff', textAlign: 'center', py: 4 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: '#e1306c', mx: 'auto', mb: 2 }}>
                <InstagramIcon />
              </Avatar>
              <Typography variant="h6">Instagram</Typography>
              <Typography variant="body2" color="#ccc">
                Follow us for updates and behind-the-scenes.
              </Typography>
              <Typography variant="body1" mt={1}>
                <a href="https://instagram.com/blogsync" target="_blank" rel="noopener noreferrer" style={{ color: '#f48fb1', textDecoration: 'none' }}>
                  @blogsync
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#112d3b', color: '#fff', textAlign: 'center', py: 4 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: '#4caf50', mx: 'auto', mb: 2 }}>
                <PhoneIcon />
              </Avatar>
              <Typography variant="h6">Call Us</Typography>
              <Typography variant="body2" color="#ccc">
                We're available 9AM – 6PM IST
              </Typography>
              <Typography variant="body1" mt={1}>
                <a href="tel:+91234567890" style={{ color: '#a5d6a7', textDecoration: 'none' }}>
                  +91 123-456-7890
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
