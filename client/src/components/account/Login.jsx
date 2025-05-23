import React, { useState, useEffect, useContext } from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
    border-radius: 12px;
    overflow: hidden;
     background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    color: #e0e0e0;

    & > div, & > button, & > p {
        margin-top: 20px;
    }

    & input {
        color: #e0e0e0;
    }

    & label {
        color: #aaaaaa;
    }

    & .MuiInput-underline:before {
        border-bottom: 1px solid #333;
    }

    & .MuiInput-underline:hover:not(.Mui-disabled):before {
        border-bottom: 1px solid #888;
    }
`;
const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '40px 0 0'
});

const LoginButton = styled(Button)`
    text-transform: none;
    background: linear-gradient(135deg, #234a57, #143368);
    color: #ffffff;
    height: 48px;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

    &:hover {
        background: linear-gradient(135deg, #2a5298, #1e3c72);
    }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #1f1f1f;
    color: #64b5f6;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #64b5f6;
    font-weight: bold;

    &:hover {
        background: #2c3e50;
        color: #ffffff;
    }
`;

const Text = styled(Typography)`
    color: #b0b0b0;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 12px;
    color: #ff5252;
    margin-top: 10px;
    font-weight: 600;
`;


const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = '/Logo.png';

    useEffect(() => {
        showError('');
    }, [login]);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            isUserAuthenticated(true);
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! Please try again later.');
        }
    };

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! Please try again later.');
        }
    };

    const toggleSignup = () => {
        toggleAccount(account === 'signup' ? 'login' : 'signup');
    };

    return (
       
        <Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {account === 'login' ? (
                    <Wrapper>
                        <TextField variant="standard" value={login.username} onChange={onValueChange} name="username" label="Enter Username" />
                        <TextField variant="standard" type="password" value={login.password} onChange={onValueChange} name="password" label="Enter Password" />
                        {error && <Error>{error}</Error>}
                        <LoginButton variant="contained" onClick={loginUser}>Login</LoginButton>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <SignupButton onClick={toggleSignup}>Create an account</SignupButton>
                    </Wrapper>
                ) : (
                    <Wrapper>
                        <TextField variant="standard" onChange={onInputChange} name="name" label="Enter Name" />
                        <TextField variant="standard" onChange={onInputChange} name="username" label="Enter Username" />
                        <TextField variant="standard" type="password" onChange={onInputChange} name="password" label="Enter Password" />
                        <SignupButton onClick={signupUser}>Signup</SignupButton>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <LoginButton onClick={toggleSignup}>Already have an account</LoginButton>
                    </Wrapper>
                )}
            </Box>
        </Component>
        
    );
};

export default Login;
