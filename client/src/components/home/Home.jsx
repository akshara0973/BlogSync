import { Grid, Box, styled } from '@mui/material';
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

// Styled dark theme container
const Container = styled(Box)`
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #f0f0f0;
  position: relative;
  overflow: hidden;
`;

const Home = () => {
    return (
        <Container>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
