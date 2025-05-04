import React from 'react';
import { Box, Typography, styled, Grid, Link } from '@mui/material';

const Wrapper = styled(Box)`
  background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  color: #e0e0e0;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
`;

const Highlight = styled('span')`
  color: #4fc3f7;
`;

const Stat = styled(Box)`
  margin-bottom: 20px;
`;

const Value = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  color: #4fc3f7;
`;

const Label = styled(Typography)`
  font-size: 1rem;
  color: #b0bec5;
`;

const StyledLink = styled(Link)`
  color: #90caf9;
  display: block;
  margin-top: 8px;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Grid container spacing={6}>
        {/* Left Section: Mission */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#ffffff">
          We write <Highlight>authentic, insightful stories</Highlight>insightful stories to spark curiosity and meaningful conversations.
          
          </Typography>
          <Typography variant="body1" color="#cfd8dc" mt={2}>
          At our core, we're a team of curious minds who believe in the power of words to inform, inspire, and connect. Whether it's the latest trends in technology, reflections on personal growth, or deep dives into cultural moments, our blog is your space to explore ideas that matter.          </Typography>

          <Box mt={4}>
            <StyledLink href="#">Write for BlogSync ↗</StyledLink>
            <StyledLink href="#">Community Guidelines ↗</StyledLink>
            <StyledLink href="#">Press & Mentions ↗</StyledLink>
            <StyledLink href="#">Contact Us ↗</StyledLink>
          </Box>

        </Grid>

        {/* Right Section: Stats */}
        <Grid item xs={12} md={6}>
          <Stat>
            <Value>✍️ Original voices, not algorithms</Value>
            <Label>Every piece is written with purpose and perspective, not just SEO.</Label>
          </Stat>
          <Stat>
            <Value>🌍 Global mindset, local relevance</Value>
            <Label> We cover stories that resonate across borders while staying grounded in real experiences.</Label>
          </Stat>
          <Stat>
            <Value>💬 Engaging, not echoing</Value>
            <Label>Our blog encourages discussion, questions, and real dialogue—not just likes and shares.</Label>
          </Stat>
          <Stat>
            <Value>🚀 Built for lifelong learners</Value>
            <Label>Whether you're here to grow, explore, or unwind, there's always something new to discover.</Label>
          </Stat>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default About;
