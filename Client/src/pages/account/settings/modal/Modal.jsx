import React, { useContext } from 'react';
import Button from "@src/components/Button"
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SettingContext from '../SettingContext';
import Input from './Input';
import Dialog from "./Dialog"
import UserContext from "@src/contexts/user"
import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';


export default function Modal(props) {
    const { open,
        handleClose,
        handleOpen,
        inputValue,
        setInputValue,
        label
    } = useContext(SettingContext)

    const { user, updateUser } = useContext(UserContext)
    const { register, handleSubmit } = useForm()

    const handleForm = (e) => {
        e.preventDefault()
        alert("Form submitted")
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <>
            <Dialog open={open} onClose={handleClose}>

                <DialogContentText>
                    Change account setting.
                </DialogContentText>
                <form
                    method='post'
                    // action='/settings'
                    onSubmit={handleForm}
                >

                    <DialogContent>
                        <Input
                            autoFocus
                            label={label}
                            type="text"
                            value={inputValue}
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button
                            primary
                            type="submit"
                        >Save</Button>
                    </DialogActions>
                </form>

            </Dialog>
        </>
    );
}