import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom'

import { API } from '../../service/api';

import { DataContext } from '../../context/DataProvider';

// components
import Comments from './comments/Comments';

const Container = styled(Box)(({ theme }) => ({
  margin: '50px 100px',
  color: '#e0e0e0',
  background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.8)',
  [theme.breakpoints.down('md')]: {
      margin: '20px',
  },
}));

const Image = styled('img')({
  width: '100%',
  height: '50vh',
  objectFit: 'cover',
  borderRadius: '8px',
  border: '1px solid #444',
});

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 6px;
  border: 1px solid #64b5f6;
  border-radius: 8px;
  color: #64b5f6;
  background-color: #1e2a35;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
      background-color: #2a3b4c;
  }
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 6px;
  border: 1px solid #ef9a9a;
  border-radius: 8px;
  color: #ef9a9a;
  background-color: #2a2a2a;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
      background-color: #3a3a3a;
  }
`;

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  margin: 50px 0 10px 0;
  color: #ffffff;
`;

const Author = styled(Box)(({ theme }) => ({
  color: '#b0bec5',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0',
  [theme.breakpoints.down('sm')]: {
      display: 'block',
  },
}));

const DetailView = () => {
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);

    const deleteBlog = async () => {  
        await API.deletePost(post._id);
        navigate('/')
    }

    return (
        <Box
          sx={{
            background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
            minHeight: '100vh',
            padding: '20px 0',
          }}
        >
          <Container>
            <Image src={post.picture || url} alt="post" />
            <Box style={{ float: 'right' }}>
              {
                account.username === post.username &&
                <>
                  <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
                  <DeleteIcon onClick={() => deleteBlog()} color="error" />
                </>
              }
            </Box>
            <Heading>{post.title}</Heading>
            <Author>
              <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>Author: <span style={{ fontWeight: 600 }}>{post.username}</span></Typography>
              </Link>
              <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>
            <Typography>{post.description}</Typography>
            <Comments post={post} />
          </Container>
        </Box>
      );
      
        
}

export default DetailView;