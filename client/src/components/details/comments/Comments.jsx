import { useState, useEffect, useContext } from 'react';
import { Box, TextareaAutosize, Button, styled } from '@mui/material';

import { DataContext } from '../../../context/DataProvider';

import { API } from '../../../service/api';

//components
import Comment from './Comment';

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
`;

const Image = styled('img')({
  width: 50,
  height: 50,
  borderRadius: '50%',
  border: '2px solid #444',
});

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px !important;
  width: 100%; 
  margin: 0 20px;
  padding: 12px;
  background-color: #2a2a2a;
  color: #f0f0f0;
  border: 1px solid #444;
  border-radius: 6px;
  font-family: inherit;
  resize: none;
  &:focus {
    outline: none;
    border-color: #90caf9;
  }
`;


const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const { account } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        }
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
    }

    const addComment = async() => {
        await API.newComment(comment);
        setComment(initialValue)
        setToggle(prev => !prev);
    }
    
    return (
        <Box>
            <Container>
                <Image src={url} alt="dp" />   
                <StyledTextArea 
                    rowsMin={5} 
                    placeholder="what's on your mind?"
                    onChange={(e) => handleChange(e)} 
                    value={comment.comments}
                />
               <Button 
                    variant="contained" 
                    size="medium" 
                    style={{ 
                        height: 40, 
                        background: "linear-gradient(135deg, rgb(35, 74, 87), rgb(20, 51, 104))"
                    }}
                    onClick={(e) => addComment(e)}
                    >
                    Post
                    </Button>
            
            </Container>
            <Box>
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Comments;