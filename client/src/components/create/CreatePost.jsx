import React, { useState, useEffect, useContext } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import mammoth from 'mammoth'; // Import mammoth for word file parsing

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [wordText, setWordText] = useState(''); // To store text from word file
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, []);

    // Handle Word file upload and text extraction
    // const handleFileChange = (e) => {
    //     const uploadedFile = e.target.files[0];
    //     setFile(uploadedFile);

    //     if (uploadedFile && uploadedFile.name.endsWith('.docx')) {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             const arrayBuffer = reader.result;
    //             mammoth.extractRawText({ arrayBuffer: arrayBuffer })
    //                 .then((result) => {
    //                     setWordText(result.value); // Set extracted text to state
    //                 //   console.log(result.value)
    //                     setPost((prevPost) => ({ ...prevPost, description: result.value }));
                     
    //                 })
    //                 .catch((err) => console.log(err));
    //         };
    //         reader.readAsArrayBuffer(uploadedFile);
    //     }
    // };
    const handleWordFileChange = (e) => {
        const uploadedFile = e.target.files[0];
    
        if (uploadedFile && uploadedFile.name.endsWith('.docx')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const arrayBuffer = reader.result;
                mammoth.extractRawText({ arrayBuffer: arrayBuffer })
                    .then((result) => {
                        setWordText(result.value);
                        setPost((prevPost) => ({ ...prevPost, description: result.value }));
                    })
                    .catch((err) => console.log(err));
            };
            reader.readAsArrayBuffer(uploadedFile);
        }
    };
    
    const handlePhotoFileChange = async (e) => {
        const uploadedFile = e.target.files[0];
    
        if (uploadedFile) {
            // Show instant preview
            const previewURL = URL.createObjectURL(uploadedFile);
            setPost((prevPost) => ({ ...prevPost, picture: previewURL }));
    
            // Now upload to server
            const data = new FormData();
            data.append("name", uploadedFile.name);
            data.append("file", uploadedFile);
    
            const response = await API.uploadFile(data);
    
            // After successful upload, replace the preview with server URL
            setPost((prevPost) => ({ ...prevPost, picture: response.data }));
        }
    };
    
    

    const savePost = async () => {
        // Upload image before saving the post
        if (file) {
            console.log(post.description)
            const data = new FormData();
            data.append("name", file.name);
            data.append("file", file);
            console.log(data)
            console.log(post)
            const response = await API.uploadFile(data);
            post.picture = response.data; // Update picture URL
            // Now create the post with the updated picture
            await API.createPost(post);
        } else {
            // If no file, create post without the image
            await API.createPost(post);
        }

        navigate('/');
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <Image src={url} alt="post" />

            <StyledFormControl>
                {/* Word File Upload */}
                <label htmlFor="wordFileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="wordFileInput"
                    accept=".docx"
                    style={{ display: "none" }}
                    onChange={handleWordFileChange}
                />

                {/* Photo Upload */}
                <label htmlFor="photoFileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="photoFileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handlePhotoFileChange}
                />

                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>

            </StyledFormControl>


            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                value={wordText || post.description} // Show extracted Word text if available
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    );
};

export default CreatePost;
