import React, {useContext} from 'react'
import styled from "styled-components"
import { useParams, useNavigate } from 'react-router-dom'
import { grey } from "@mui/material/colors"
import EditRounded from "@mui/icons-material/EditRounded"
import SettingContext from '../SettingContext'


const MediaWrap = styled.div``

const Block = styled.section`
    display:flex;
    text-align: left;
    align-items: flex-start;
    margin: 24px 0;
`

const Icon = styled.span`
    padding: 12px;
    padding-top: 0;
`

const Details = styled.span`
    flex: 2;
`

const Header = styled.p`
    font-size: 1.2rem;
    color: ${grey[500]};
    line-height: 1.2;
    margin:0;
`

const Tagline = styled(Header)`
    font-size: 1.324rem;
    color: ${grey[700]};
    font-weight: bolder;
`

const Notice = styled.span`
    display: inline-block;
    font-size: .7rem;
    color: #A6A6A6;
    margin-top: 7px;
    width: calc(400px - 109px);
    text-align: left;
    border: solid red;
`

const Edit = styled(Icon)`
    cursor: pointer;
`

function Media(props) {
    const { username } = useParams()
    const navigate = useNavigate();
    const { handleOpen, setInputValue, setLabel } = useContext(SettingContext)
    
    return (
        <Block>
            <Icon>
                {props.icon}
            </Icon>
            <Details>
                <Header>{props.header}</Header>
                <Tagline>{props.value}</Tagline>
            </Details>
            <Edit onClick={(e) => {
                handleOpen()
                setInputValue(props.value)
                setLabel(props.header)
            }}>
                <EditRounded />
            </Edit>
        </Block>

    )
}

export default Media