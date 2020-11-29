import React ,{useState, useEffect}from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/Settings';
import PostAddIcon from '@material-ui/icons/PostAdd';
import "./Posts.css";
import Button from '@material-ui/core/Button';
import Card from "./Card";
import {db, auth} from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddPost from './AddPost';
import {Link} from "react-router-dom"; 
// modal function 

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
 
//   actual function

function Posts() {

const [posts, setPosts] = useState([ ]);
const [open,setOpen] = useState(false)

useEffect(() => {
     db.collection('posts').onSnapshot(snapshot => {
         setPosts(snapshot.docs.map(doc =>({
             id:doc.id,
             post: doc.data()
            })));
     })
}, []);



const classes = useStyles();
const [modalStyle] = React.useState(getModalStyle);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [username, setUsername] = useState('');
const [user, setUser] = useState(null);
const [openSignIn, setOpenSignIn] = useState('')

const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return  authUser.user.updateProfile({
            displayName: username
        })
    })
    .catch((error) => alert(error.message));
    setOpen(false);
};

const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error.message));

    setOpenSignIn(false);
}

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser) {
            setUser(authUser)

        }
        else {
            setUser(null);
        }

    })

    return () => {
        unsubscribe();
    }
}, [user, username])
    return (
        <div className="posts">
     
     <Modal open={open} onClose={() => setOpen(false)} >

        <div style={modalStyle} className={classes.paper}>

            <form>
             <input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
             <input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
             <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
             
             
               <Button onClick = {signUp}>Login</Button>
             
            
            </form>
        
        </div>

      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)} >

        <div style={modalStyle} className={classes.paper}>

            <form>
             
             <input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
             <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
             
             
               <Button onClick = {signIn}>Login</Button>
             
            
            </form>
        
        </div>

      </Modal>

            <div className="posts-left">
                <Link to="/">
                <a> <DashboardIcon className="left-Icon"/> Dashboard</a>
                </Link>
               
                <a> <SchoolIcon className="left-Icon"/> Lorem</a>
                <a> <SettingsIcon className="left-Icon"/> Ipsum</a>
                <a> <PostAddIcon className="left-Icon"/> Posts</a>
                {user ? (
                   <a onClick={() =>auth.signOut()}>SignOut</a>
                ): (
                    <div className="login_container">
                        <a onClick={() => setOpen(true)}>SignUp</a>
                        <a onClick={() => setOpenSignIn(true)}>Login</a>
                    </div>

                    
                )}


                
            </div>

            <div className="posts-right">
                {user?.displayName ? (
                    <AddPost username={user.displayName}/>
                ):(
                    <h3>YOU NEED TO LOGIN</h3>
                )}
                 <div className="postContents">
                 {
                     posts.map(({id,post}) => (
                            <Card key={id}  username={post.username} caption={post.caption} />
                     ))
                 }
                 </div>
                 
                 
            </div>
        </div>
    )
}

export default Posts
