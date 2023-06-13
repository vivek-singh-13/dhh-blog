import "./post.css";

export default function Post(){
    return (
        <div className="post">
            <img className="postImg" 
            src="https://images.unsplash.com/photo-1602394701004-ffb4eff6f49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&w=1000&q=80" alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium ducimus atque earum eos eaque iusto repellat blanditiis placeat, in quibusdam eveniet quae itaque nam quia minima fugiat voluptate sit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, expedita laboriosam sed, earum porro molestias velit magnam culpa facere pariatur beatae iusto doloribus necessitatibus placeat rem repudiandae sit suscipit. Praesentium!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos commodi animi iusto aut eum dignissimos sed tempora atque, eaque recusandae facilis maxime architecto necessitatibus laudantium! Est et hic reprehenderit pariatur.
                </p>
        </div>
    )
}