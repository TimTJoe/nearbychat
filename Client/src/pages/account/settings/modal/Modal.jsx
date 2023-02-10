import React, { useContext, useState } from 'react';
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

    const [type, setType] = useState("text")

    const switchType = (type) => {
        if (type.constructor === String) {
            switch (type) {
                case "name": setType("text"); break;
                case "password": setType("password"); break;
                case "phone": setType("tel"); break;
                case "email": setType("email"); break;
                default: setType("text"); break;
            }
        } else {
            return alert("Function accept only string type")
        }

    }
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
        updateUser(label, inputValue);
        switchType(label);
        alert("Type: " + type + " label: " + label)
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
                            type={type}
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