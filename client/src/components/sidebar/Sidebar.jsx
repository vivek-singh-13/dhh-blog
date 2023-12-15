import './sidebar.css';
//import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import {serverUrl} from "../../constants";

export default function Sidebar(){

    const [cats, setCats] = useState([]);

    useEffect(() =>{
        const getCats = async () =>{
            const res = await axios.get(`${serverUrl}/categories`);
            setCats(res.data);
        };
        getCats();
    })
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <p>
                Hey there! I'm Vivek Singh, a Web Developer with a deep love for hip hop music. I created this blog as a space to share my passion for the genre and to provide you with articles on hip hop artists, new music releases, and reviews. 
                Through this blog, I aim to offer you a blend of informative and entertaining content that celebrates the artistry, 
                creativity, and the inspiration that it gives to the listeners. Whether you're a seasoned hip hop head or just beginning to explore this dynamic world, I'm here to foster a community of like-minded individuals who share a 
                passion for hip hop.
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">
                    CATEGORIES
                </span>
            <ul className="sidebarList">
                {cats.map(c=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
                
            </ul>
            </div>  
            <div className="sidebarItem">
            <span className="sidebarTitle">
                    FOLLOW ME
                </span>
            <div className="sidebarSocial">
            
                <Link to="https://www.linkedin.com/in/viveksingh1312/" target="_blank" rel="noopener noreferrer" className="link"><LinkedInIcon className="sidebarIcon"/></Link>
                <Link to="https://github.com/vivek-singh-13" target="_blank" rel="noopener noreferrer" className="link"><GitHubIcon className="sidebarIcon"/></Link>
                <Link to="https://www.instagram.com/_viveksingh13/?hl=en" target="_blank" rel="noopener noreferrer" className="link"><InstagramIcon className="sidebarIcon"/></Link>
            </div>
            </div>

        </div>
    )
}