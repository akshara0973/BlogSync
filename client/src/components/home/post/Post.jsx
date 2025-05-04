
import { styled, Box, Typography } from '@mui/material';
const Container = styled(Box)`
 
  border-radius: 16px;
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 370px;
  color: #f0f0f0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;

  & > img, & > p {
    padding: 0 12px 12px 12px;
  }
`;

const Image = styled('img')({
  width: '100%',
  objectFit: 'cover',
  height: 160,
  borderBottom: '1px solid #444',
});

const Heading = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 10px;
`;

const Text = styled(Typography)`
  color: #cccccc;
  font-size: 13px;
  margin-top: 6px;
`;

const Details = styled(Typography)`
  font-size: 14px;
  color: #dcdcdc;
  padding: 10px 16px;
  text-align: center;
  word-break: break-word;
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