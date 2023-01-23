import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { blue, grey } from "@mui/material/colors";

const InputField = styled(TextField)`

    && input.MuiInputBase-input {
        padding: .8rem;
    }

    && label.Mui-focused {
        color: ${grey[500]};
        font-weight: bolder
    }

    && .MuiOutlinedInput-root {
        border-radius: 15px/15px;
    }

    && .Mui-focused fieldset {
            border-color: ${grey[500]};
        }
`


export default InputField