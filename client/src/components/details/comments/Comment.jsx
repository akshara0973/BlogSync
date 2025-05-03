import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
  margin-top: 30px;
  background: #1f1f1f;
  padding: 10px 16px;
  border-radius: 8px;
  color: #e0e0e0;
`;

const Container = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Name = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  color: #ffffff;
`;

const StyledDate = styled(Typography)`
  font-size: 14px;
  color: #a0a0a0;
`;

const DeleteIcon = styled(Delete)`
  margin-left: auto;
  color: #ef5350;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #ff867c;
  }
`;


const Comment = ({ comment, setToggle }) => {

    const { account } = useContext(DataContext)
    
    const removeComment = async () => {
       await API.deleteComment(comment._id);
       setToggle(prev => !prev);
    }

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                { comment.name === account.username && <DeleteIcon onClick={() => removeComment()} /> }
            </Container>
            <Typography>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;