//import React from "react";
import "./topbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import {
    Link
  } from "react-router-dom";

export default function TopBar(){
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <FacebookIcon className="topIcon" />
                <LinkedInIcon className="topIcon"/>
                <InstagramIcon className="topIcon"/>
                
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
            {
                user ? (
                <img className="topImg" src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                        <Link to="/login" className="link">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                    <Link to="/register" className="link">REGISTER</Link>
                    </li>
                    </ul>
                )
            }
                
                <SearchIcon className="topSearchIcon"/>
            </div>
        </div>
    )
}