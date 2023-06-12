import "./write.css";
import AddIcon from '@mui/icons-material/Add';

export default function Single() {
    return (
        <div className="write">
            <img 
            className="writeImg" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" alt="" 
            />
           <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <AddIcon className="writeIcon"/>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text"
                className="writeInput writeText" >

                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
           </form>
        </div>
    )
}