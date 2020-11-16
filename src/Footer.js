import { TableFooter } from '@material-ui/core'
import React from 'react'

const Footer = () =>
{
    return (
        <div style={{backgroundColor:"white", color: "black", width: "100%"}}>
            <ul style={{listStyleType: "none", fontSize:"18px" }}>
                <li> Features </li>
                <li> Subscribe </li>
                <li> Contact </li>
                <li> © 2020 Pod Co. All rights reserved </li>
            </ul>
        </div>
    )
}

export default Footer;