import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios"
import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';

import TextField from '../components/TextField';
import Fieldbox from '../components/Fieldbox';
import Button from '../components/Button';
import Paper from '../components/Paper';
import Textbox from '../components/Textbox';
import Link from '../components/Link';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// import dotenv from "dotenv"
// dotenv.config()
// const BACKEND_URL = process.env.BACKEND_URL;

const Form = styled(Box)`
    min-height: 93vh;
    background-color: white;
`

const ButtonBox = styled.div`
    text-align: right;
        margin: 2vh 5vh 0 0;

`
/* const Footer = styled.div`
    margin-top: 8%;
` */

function Signup() {
    const [values, setValues] = useState({
        showPassword: false,
        isPasswordConfirmed: false
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
            <Navigation />

            <Paper>
                <Header
                    title="Create new account"
                    tagline="Shoot your short." />

                <Fieldbox>

                    <TextField
                        label="Email"
                        name="email"
                        type={"text"}
                        {...register("email", FieldOptions.email)}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <TextField
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
                </Fieldbox>
                <Textbox align="center">
                    You will be able to send short messages to people within 120km of your current location. Conversation disappear within 24 hours.

                </Textbox>

                <ButtonBox>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        type="submit"
                        disableElevation >Sign up</Button>
                </ButtonBox>
                <Footer>
                    <Textbox align="center"> Already have an account?
                        <Link href='/login'>Log in</Link></Textbox>
                </Footer>
            </Paper>
        </Form

        >
    )
}

export default Signup