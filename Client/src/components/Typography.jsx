import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography"

const CustomTypography = styled(Typography)(({ theme }) => ({
    fontSize: 24,
    fontWeight: 900,
    textTransform: "capitalize"
}))

export default CustomTypography