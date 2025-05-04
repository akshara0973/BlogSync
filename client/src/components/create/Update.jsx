import React, { useState, useEffect } from 'react';
import { Box, styled, TextareaAutosize, Button, FormControl, InputBase } from '@mui/material';
import { AddCircle as Add, Image as ImageIcon } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

import { API } from '../../service/api';

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
    marginBottom: '20px',
  });
  
  const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #234a57;
    border: 1px solid #555;
    border-radius: 8px;
    padding: 8px 16px;
    gap: 12px;
  `;
  
  const InputTextField = styled(InputBase)`
    flex: 1;
    font-size: 24px;
    color: #e0e0e0;
    background-color: transparent;
  
    & input {
      color: inherit;
    }
  `;
  
  const StyledTextArea = styled(TextareaAutosize)`
    width: 97%;
    background: #234a57;
    color: #e0e0e0;
    border: 1px solid #555;
    margin-top: 30px;
    font-size: 18px;
    padding: 14px;
    border-radius: 8px;
    font-family: 'Segoe UI', sans-serif;
    resize: none;
    transition: border-color 0.3s ease;
  
    &:focus-visible {
      outline: none;
      border-color: #64b5f6;
      box-shadow: 0 0 5px rgba(100, 181, 246, 0.5);
    }
  `;
  
  const StyledButton = styled(Button)`
    background: linear-gradient(135deg, #234a57, #143368);
    color: #fff;
    font-weight: bold;
    text-transform: none;
    padding: 8px 16px;
    border-radius: 6px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  
    &:hover {
      background: linear-gradient(135deg, #2a5298, #1e3c72);
    }
  `;
  

const initialPost = {
  title: '',
  description: '',
  picture: '',
  username: 'codeforinterview',
  categories: 'Tech',
  createdDate: new Date()
};

const Update = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('');
  const [imageURL, setImageURL] = useState('');
  const { id } = useParams();

  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await API.uploadFile(data);
        if (response.isSuccess) {
          post.picture = response.data;
          setImageURL(response.data);
        }
      }
    }
    getImage();
  }, [file]);

  const updateBlogPost = async () => {
    await API.updatePost(post);
    navigate(`/details/${id}`);
  }

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
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

      <StyledFormControl>
        <label htmlFor="fileInput">
          <Add fontSize="large" style={{ color: '#90caf9', cursor: 'pointer' }} />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputTextField onChange={handleChange} value={post.title} name='title' placeholder="Title" />
        <StyledButton onClick={updateBlogPost}>Update</StyledButton>
      </StyledFormControl>

      <StyledTextArea
        minRows={5}
        placeholder="Tell your story..."
        name='description'
        onChange={handleChange}
        value={post.description}
      />
    </Container>
    </Box>
  );
};

export default Update;
