import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Settings(){
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Account
                    </span>
                </div>
                <form action="" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfPic">
                        <img className="settingsImg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHlwiqulgRvV92QFpHZM0WAAEbeWoXgYMSQ&usqp=CAU" 
                        alt="" 
                        />
                        <label htmlFor="fileInput">
                            <AccountCircleIcon className="settingsPPIcon"/>
                        </label>
                        <input type="file" name="" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Vivek"/>
                    <label>Email</label>
                    <input type="email" placeholder="vivek@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>

                    <button className="settingsSubmit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

