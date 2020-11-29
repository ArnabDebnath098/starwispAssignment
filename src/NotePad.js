
import React,{useState} from 'react';
import "./NotePad.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

function NotePad() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true);};
    const handleClose = () => { setOpen(false); };

    const [item, setItem] = useState('');
    const [newItem, setNewItem] =  useState([]);
    
    
    const itemEvent = (event) => {
        setItem(event.target.value);
    }
    const addNote = () => {
        setNewItem((previous) => {
           return  [...previous, item];
        });
        setItem(" ");
    }
    
    

    return (
        <div className="notePad">
            <h4>Notepad</h4>
                        
                        <div className="notepadNote">
                            <div className="noteNote">
                                  {newItem.map((val) => {
                                    return <p><span>{val}</span>{val}</p>;
                                   })}
                            </div>
                           
                           <a href="#"  onClick={handleOpen}><AddCircleIcon className="addNote"/></a>
                        </div>
                       
                    



                    {/*------------- Modal Notepad-------------- */}

                    <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500, }} >
                             <Fade className="fadeContent" in={open}>
                               <form >
                                   <p>Title</p>
                                   <input id="title"   onChange={itemEvent}/>
                                   <textarea placeholder="Textarea" id="notes" onChange={itemEvent}/>  
                                   <Button className="noteButton"  onClick={addNote} >Add Note</Button>
                               </form>
                             </Fade>
                   </Modal>
        </div>
    )
}

export default NotePad
