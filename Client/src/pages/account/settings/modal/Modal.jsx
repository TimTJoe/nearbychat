import React, { useContext } from 'react';
import Button from "@src/components/Button"
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SettingContext from '../SettingContext';
import Input from './Input';
import Dialog from "./Dialog"
import UserContext from "@src/contexts/user"

export default function Modal(props) {
    const { open,
        handleClose,
        handleOpen,
        inputValue,
        setInputValue,
        label
    } = useContext(SettingContext)
    const { user, updateUser } = useContext(UserContext)

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContentText>
                    You are about to change: {inputValue}
                </DialogContentText>
                <DialogContent>
                    <Input
                        autoFocus
                        label={label}
                        type="text"
                        value={inputValue}
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button primary onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}