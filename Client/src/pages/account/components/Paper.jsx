import styled from "styled-components"
import { grey } from '@mui/material/colors'


const Paper = styled.section`
    margin: 0 auto;
    border-radius: 12px;
    margin-top: 5%;
    min-height: 70vh;
    max-width: 410px;
    text-align: center;
    border: thin solid ${grey[100]};
    box-shadow: -3px 10px 50px 5px rgba(0, 0, 0, 0.068);
`


export default Paper
