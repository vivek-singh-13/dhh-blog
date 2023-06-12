import './sidebar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Sidebar(){
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img src="data:image/jpeg;base64,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" alt="img" />
                <p>Lorem ipsum bah ahscg akhhw anim id est hello world is a beginning programming language laborum.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">
                    CATEGORIES
                </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">
                    FOLLOW ME
                </span>
            <div className="sidebarSocial">
            <FacebookIcon className="sidebarIcon"/>
                <LinkedInIcon className="sidebarIcon"/>
                <InstagramIcon className="sidebarIcon"/>
            </div>
            </div>

        </div>
    )
}