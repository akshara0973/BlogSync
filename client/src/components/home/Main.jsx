import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import Header from '../header/Header'; 
import Link from '@mui/material/Link';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled(Box)`
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #f0f0f0;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled(Box)`
  background: url('/banner1.png') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 100px 20px;
  max-height: 500px;
  border-radius: 16px;
  text-align: left;
  
`;

const HeroTitle = styled(Typography)`
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled(Typography)`
  font-size: 20px;
  color: #cccccc;
  margin-bottom: 30px;
`;

const CTAButtons = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  
`;

const CTAButton = styled(Button)`
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  color: #fff;
  background: linear-gradient(135deg,rgb(35, 74, 87),rgb(20, 51, 104));
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => props.variant === 'outlined' ? '#ffffff22' : '#1565c0'};
  }
`;

const AboutTitle = styled(Typography)`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 80px 0 40px;
  color: #ffffff;
`;

const Section = styled(Box)`
  margin: 60px 0;
  text-align: center;
`;

const SectionTitle = styled(Typography)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SectionText = styled(Typography)`
  font-size: 16px;
  color: #cccccc;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutSection = styled(Box)`
  background-color: rgb(35, 74, 87);
  padding: 60px 20px;
  border-radius: 16px;
  text-align: center;
  margin-top: 60px;
`;

const AboutHeading = styled(Typography)`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
`;

const AboutText = styled(Typography)`
  font-size: 16px;
  color: #d1d1d1;
  max-width: 800px;
  margin: 0 auto;
`;
const Avatar = styled('img')`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #444;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const QuoteText = styled(Typography)`
  font-style: italic;
  font-size: 16px;
  color: #d1d1d1;
  margin-bottom: 10px;
`;

const UserName = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;

const TestimonialsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
`;

const TestimonialCard = styled(Box)`
  background: rgb(35, 74, 87);
  border-radius: 12px;
  padding: 20px;
  max-width: 600px;
  color: #e0e0e0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
`;


const FramesWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const BrowserFrame = styled(Box)`
  background: #203a43;
  border: 1px solid #333;
  border-radius: 16px;
  overflow: hidden;
  width: 250px;
  height: 260px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.6);
  position: relative;
  padding-top: 40px;
  color: #f5f5f5;
  text-align: left;
`;

const FrameHeader = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background: #203a43;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const Circle = styled(Box)`
  width: 12px;
  height: 12px;
  background: ${props => props.color};
  border-radius: 50%;
  margin-right: 8px;
`;

const FrameContent = styled(Box)`
  padding: 10px 20px;
`;

const FrameImage = styled('img')`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-bottom: 1px solid #444;
`;

const FrameHeading = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 8px;
  color: #ffffff;
`;

const FrameParagraph = styled(Typography)`
  font-size: 14px;
  color: #cccccc;
`;
const InfoSection = styled(Box)`
  background-color:rgb(35, 74, 87);
  padding: 60px 20px;
  margin-top: 60px;
  border-radius: 16px;
`;

const SectionHeading = styled(Typography)`
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 40px;
`;

const InfoGrid = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const InfoCard = styled(Box)`
  background: rgb(20, 52, 63);
  border-radius: 16px;
  width: 280px;
  padding: 30px 20px;
  text-align: center;
  color: #B0B0B0;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.5);
`;

const InfoIcon = styled('img')`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  filter: brightness(0) invert(1);
`;

const InfoTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

const InfoText = styled(Typography)`
  font-size: 14px;
  color: #B0B0B0;
`;
const FooterContainer = styled(Box)`
 background-color: #203a43;
  color: #e0e0e0;
  position: relative;
  padding: 40px 20px 20px;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 80px;
`;

const themeColor = 'rgb(20, 52, 63)'; // Or get from theme

const encodedColor = encodeURIComponent(themeColor);

const Wave = styled('div')`
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 100' xmlns='http://www.w3.org/2000/svg'><path fill='${encodedColor}' d='M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z'></path></svg>") no-repeat;
  background-size: cover;
  color: ${themeColor};
`;


const SocialIcons = styled(Box)`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 24px;

  svg {
    font-size: 28px;
    color: white;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #ffd54f;
    }
  }
`;
const NavLinks = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;

  a {
    color: #f0f0f0;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterText = styled(Typography)`
  font-size: 12px;
  color: #c0c0c0;
`;
const Main = () => {
  return (
    <Container>
      <Header minimal />
      <HeroSection>
        <HeroTitle>Welcome to BlogSync</HeroTitle>
        <HeroSubtitle>Discover, read, and share amazing stories with the world.</HeroSubtitle>
        <CTAButtons>
          <CTAButton>Explore Blogs</CTAButton>
          <CTAButton variant="outlined">Sign Up</CTAButton>
        </CTAButtons>
      </HeroSection>

      <AboutSection>
        <AboutHeading>About BlogSync</AboutHeading>
        <AboutText>
          BlogSync is a dynamic blogging platform where creativity meets community. Whether you're an avid reader or an aspiring writer,
          BlogSync makes it easy to engage with meaningful content and share your voice with the world.
        </AboutText>
      </AboutSection>

      <AboutTitle>Featured Blogs</AboutTitle>
      <FramesWrapper>
        
          <BrowserFrame>
            <FrameHeader>
              <Circle color="#f56565" />
              <Circle color="#f6e05e" />
              <Circle color="#48bb78" />
            </FrameHeader>
            <FrameImage src="/image.png" alt="Blog" />
            <FrameContent>
              <FrameHeading>The Future of Blogging: Trends to Watch in 2025</FrameHeading>
              <FrameParagraph>
              Upcoming trends in blogging, such as AI content creation and the rise of video blogs.
              </FrameParagraph>
            </FrameContent>         
          </BrowserFrame>

          <BrowserFrame>
            <FrameHeader>
              <Circle color="#f56565" />
              <Circle color="#f6e05e" />
              <Circle color="#48bb78" />
            </FrameHeader>
            <FrameImage src="/image1.jfif" alt="Blog" />
            <FrameContent>
              <FrameHeading>SEO Best Practices: How to Rank Higher</FrameHeading>
              <FrameParagraph>
              A guide on SEO techniques and optimization strategies specifically tailored for bloggers.
              </FrameParagraph>
            </FrameContent>         
          </BrowserFrame>

          <BrowserFrame>
            <FrameHeader>
              <Circle color="#f56565" />
              <Circle color="#f6e05e" />
              <Circle color="#48bb78" />
            </FrameHeader>
            <FrameImage src="/image2.jfif" alt="Blog" />
            <FrameContent>
              <FrameHeading>How to Build a Successful Blog</FrameHeading>
              <FrameParagraph>
              Offering a step-by-step guide on starting a blog, including niche selection.
              </FrameParagraph>
            </FrameContent>         
          </BrowserFrame>

      </FramesWrapper>

      <InfoSection>
  <SectionHeading>How It Works</SectionHeading>
  <InfoGrid>
    <InfoCard>
      <InfoIcon src="https://img.icons8.com/ios-filled/100/ffffff/add-file.png" alt="create" />
      <InfoTitle>Create a Blog</InfoTitle>
      <InfoText>Sign up and start writing with our powerful and easy-to-use editor.</InfoText>
    </InfoCard>
    <InfoCard>
      <InfoIcon src="https://img.icons8.com/ios-filled/100/ffffff/upload.png" alt="publish" />
      <InfoTitle>Publish & Share</InfoTitle>
      <InfoText>Publish your blog to the community and let the world read your words.</InfoText>
    </InfoCard>
    <InfoCard>
      <InfoIcon src="https://img.icons8.com/ios-filled/100/ffffff/comments.png" alt="engage" />
      <InfoTitle>Engage & Explore</InfoTitle>
      <InfoText>Interact with other users, leave comments, and build your network.</InfoText>
    </InfoCard>
  </InfoGrid>
</InfoSection>


     

      <Section>
  <SectionTitle>What Our Users Say</SectionTitle>
  <TestimonialsWrapper>
    <TestimonialCard>
      <Avatar src="https://randomuser.me/api/portraits/women/45.jpg" alt="User A" />
      <QuoteText>
        “BlogSync is my go-to place to share thoughts and connect with readers. The dark theme is a bonus!”
      </QuoteText>
      <UserName>– User A</UserName>
    </TestimonialCard>
    <TestimonialCard>
      <Avatar src="https://randomuser.me/api/portraits/men/35.jpg" alt="User B" />
      <QuoteText>
        “The simplicity and features are just amazing. Highly recommended.”
      </QuoteText>
      <UserName>– User B</UserName>
    </TestimonialCard>
  </TestimonialsWrapper>
</Section>

<FooterContainer>
      <Wave />
      <SocialIcons>
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </SocialIcons>

      <NavLinks>
      <Link href="#">Home</Link>
      <Link href="#">About</Link>
      <Link href="#">Services</Link>
      <Link href="#">Team</Link>
      <Link href="#">Contact</Link>

      </NavLinks>

      <FooterText>©2025 BlogSync | All Rights Reserved</FooterText>
    </FooterContainer>
    </Container>
  );
};

export default Main;
