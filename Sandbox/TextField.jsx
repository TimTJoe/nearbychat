import React from 'react'
import TextField from "@mui/material/TextField"
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const CustomTextField = styled(TextField)(({theme})=>({
	"& .MuiOutlinedInput-root": {
        borderRadius: 24,
        minHeight: 46,
        "&.Mui-focused fieldset": {
            // borderColor: "black",
        },
        "& fieldset": {
         // borderColor: "transparent"
        }
    },
    "& label.Mui-focused": {
        color: "black",
        // fontWeight: "bold",
    },
    "& input.MuiInputBase-input": {
        padding: ".5em",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontSize: ".93rem"
    },
    "& input.MuiInputBase-input:hover": {
         borderColor: "transparent"
     }
}))

function Textarea() {
	return (
		<>
        <div class="textfield-box  ">
            <textarea 
                class="form-control textarea-autosize" 
                id="textmessage" 
                rows="1" 
                placeholder="Text message..."></textarea>
        </div>
        </>
	)
}

export default Textarea