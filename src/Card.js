import React from 'react';
import "./Card.css";
import SendIcon from '@material-ui/icons/Send';

function Card({username, caption, time}) {
    return (
        <div className="card">
            <div className="content">
                        <img src="https://th.bing.com/th/id/OIP.UgHBBSzt3MUloEOH_yP4qQHaJ4?w=147&h=195&c=7&o=5&pid=1.7 "/>
                        <div className="postContent">
                           <div className="time">
                            <h4>{username}</h4>
                            <p>12:40pm</p>
                           </div>
                           <div className="text">
                              {caption}
                              
                           </div>
                        </div>
                        
                    </div>
                    <div className="comment">
                        <img src="https://th.bing.com/th/id/OIP.UgHBBSzt3MUloEOH_yP4qQHaJ4?w=147&h=195&c=7&o=5&pid=1.7"/>
                        <input type="text" placeholder="Write a comment"/>
                         <SendIcon/>
                    </div>
        </div>
    )
}

export default Card
