import { TableFooter } from '@material-ui/core'
import React from 'react'

const Footer = () =>
{
    return (
        <div style={{backgroundColor:"#282c34", color: "white", width: "100%"}}>
            <ul style={{listStyleType: "none", fontSize:"18px", display:"flex", whiteSpace:"nowrap", justifyContent:"space-evenly", height: "10px", padding: "0px" }}>
                <li style={{display:"inline"}}> Features </li>
                <li style={{display:"inline"}}> Subscribe </li>
                <li style={{display:"inline"}}> Contact </li>
                <li style={{display:"inline"}}> © 2020 Pod Co. All rights reserved </li>
            </ul>
        </div>
    )
}

export default Footer;