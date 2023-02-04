import React, { useContext } from 'react';
import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SettingContext from '../SettingContext';
import Input from './Input';
<<<<<<< Updated upstream
import Dialog from "./Dialog"
import UserContext from "@src/contexts/user"
import { Typography } from '@mui/material';
=======
import UserContext from "@src/contexts/user"
>>>>>>> Stashed changes

export default function Modal(props) {
    const { open,
        handleClose,
        handleOpen,
        inputValue,
<<<<<<< Updated upstream
        setInputValue,
        label
=======
        setInputValue
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                        label={label}
                        type="text"
=======
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
>>>>>>> Stashed changes
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