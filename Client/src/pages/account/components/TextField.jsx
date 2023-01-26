import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { blue, grey } from "@mui/material/colors";

const _TextField = styled(TextField)`
    && {
        border-radius: 15px;
        background-color: ${grey[100]};
    }
    && input.MuiInputBase-input {
        padding: .8rem;
    }
    
    && label.Mui-focused {
        color: ${grey[600]};
    }
    
    && .MuiOutlinedInput-root {
        border-radius: 15px;
    }

    && .Mui-focused fieldset {
            border-color: ${grey[600]};
        }
`


export default _TextField