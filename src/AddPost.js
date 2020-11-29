import React,{useState} from 'react';
import "./AddPost.css";
import Button from '@material-ui/core/Button';
import AttachmentIcon from '@material-ui/icons/Attachment';
import firebase from "firebase";
import {db} from './firebase';

function AddPost({username}) {
    const [caption, setCaption] =useState('');

    
   
       const handleUpload = (e) => {
            e.preventDefault();
            
   
            db.collection('posts').add({
                caption:caption,
                username:username,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
   
            setCaption("");
             
    }
    
    return (
        <div className="addPost">
            <textarea placeholder="Share something with your class" value={caption} onChange={event => setCaption(event.target.value)}/>
                     <div className="buttonArea">
                         <a href="#">Cancel</a>
                         <div className="attachFiles">
                              <AttachmentIcon className="attachIcon"/>
                              <Button className="shareIcon" onClick={handleUpload}>
                                  Share
                              </Button>
                         </div>
                     </div>
                     
        </div>
    )
}

export default AddPost
