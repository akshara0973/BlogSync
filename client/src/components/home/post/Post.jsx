
import { styled, Box, Typography } from '@mui/material';
const Container = styled(Box)`
  border-radius: 16px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 370px;
  color: #f0f0f0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
  background-color: #1c2a33;
`;

const Image = styled('img')`
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-bottom: 1px solid #444;
`;

const Heading = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin: 10px 0 4px;
  min-height: 48px;  // Ensure consistent space for title
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled(Typography)`
  color: #cccccc;
  font-size: 13px;
  margin: 2px 0;
  text-align: center;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Details = styled(Typography)`
  font-size: 14px;
  color: #dcdcdc;
  padding: 0 16px;
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-top: auto;
  margin-bottom: 12px;
  min-height: 90px;
`;




const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;