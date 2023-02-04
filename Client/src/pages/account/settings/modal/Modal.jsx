import React, { useContext } from 'react';
import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SettingContext from '../SettingContext';
import Input from './Input';
import Dialog from "./Dialog"
import UserContext from "@src/contexts/user"
import { Typography } from '@mui/material';

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
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}