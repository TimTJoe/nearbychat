import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Header from './components/Header'
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import InputField from '@src/components/Textfields';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios"
import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';
import PrimaryButton from '@src/components/Buttons';

// import dotenv from "dotenv"
// dotenv.config()
// const BACKEND_URL = process.env.BACKEND_URL;

const Form

    = styled(Box)`
    min-height: 93vh;
    background-color: white;
`
const Paper = styled.section`
    margin: 0 auto;
    border-radius: 12px;
    border: thin solid ${grey[100]};
    margin-top: 24px;
    min-height: 70vh;
    max-width: 450px;
    padding: 12px;
    /* box-shadow: 13px 14px 7px -15px rgba(0,0,0,0.1); */
    text-align: center
`
const Title = styled(Typography)`
    && {
        font-weight: 800;
        
    }
`
const Subtitle = styled(Typography)`
    &&{
        font-size: 1.1rem;
        font-weight: 300;
        margin-bottom: 1.5rem
    }
`
const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 12px;
    padding-bottom:24px ;
`
const Paragraph = styled(Typography)`
    && {
        font-size: .9rem;
        line-height: normal;
        max-width: 90%;
        margin: 0 auto;
        color: ${grey[600]}
    }
`

const ButtonBox = styled.div`
    text-align: right;
    padding: 17px 0 24px 0;
`
const Footer = styled.div`
    margin-top: 8%;
`

function Login() {
    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { setError, register, handleSubmit, formState: { errors } } = useForm()
    const handleErrors = (errors) => { }

    const handleLogin = async (data) => {
        alert("Submitting form...")
        /* axios.post(`${BACKEND_URL}/login`, data).then((response) => {
            const user = response.data.user;
            alert("login successfully.")

        }).catch((e) => {

            const errors = e.response.data.error.errors
            errors.map((item) => {
                errors[item.path] = item.message;
            })

            if (errors.email) {
                setError("email", {
                    type: "server",
                    message: errors.email

                })
            }

            if (errors.password) {
                setError("password", {
                    type: "server",
                    message: errors.password
                })
            }
        });//axios request ends */
    }
    const FieldOptions = {

        email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must be 8+ characters."
            }
        },
    }
    return (
        <Form
            autoComplete="off"
            onSubmit={handleSubmit(handleLogin, handleErrors)}
            component={"form"}
            method="post"
        >
            <Header />
            <Paper>
                <Title variant='h5'> Log in</Title>
                <Subtitle variant='subtitle1'> Shoot your short.</Subtitle>
                <InputWrap>

                    <InputField
                        label="Email"
                        name="email"
                        type={"text"}
                        {...register("email", FieldOptions.email)}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <InputField
                        label="Password"
                        name="password"
                        {...register("password", FieldOptions.password)}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        InputLabelProps={{ shrink: true }}
                        type={values.showPassword ? "text" : "password"}
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{
                                            marginRight: ".001em "
                                        }}
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </InputWrap>
                <Paragraph variant='body1'>You will be able to send short messages to people within 120km of your current location. Conversation disappear within 24 hours.</Paragraph>
                <ButtonBox>
                    <PrimaryButton
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        disableElevation >Login</PrimaryButton>
                </ButtonBox>
                <Footer>
                    <Paragraph variant='body1'>Already have an account? <Link to={"/login"}>Login</Link></Paragraph>
                </Footer>
            </Paper>
        </Form

        >
    )
}

export default Login