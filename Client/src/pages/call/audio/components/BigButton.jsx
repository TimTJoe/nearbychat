import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"
import {grey} from "@mui/material/colors"

const BigButton = styled(IconButton)(({ theme }) => ({
    width: 50,
    height: 50,
    backgroundColor: "transparent",
    "& > svg": {
        width: 38,
        height: 38,
        color: "white"
    }
}))

export default BigButton