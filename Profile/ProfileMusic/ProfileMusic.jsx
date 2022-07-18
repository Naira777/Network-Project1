
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMusicSuccess1, saveMusicSuccess2, saveMusicSuccess3 } from '../../../Redux/profile-reducer';
import { getMusic1, getMusic2, getMusic3 } from '../../../Redux/profile-selectors';


const ProfileMusicForm = (props) => {
    const music1=useSelector(getMusic1);
    const music2=useSelector(getMusic2);
    const music3=useSelector(getMusic3);
    
const dispatch= useDispatch();

    
  const onMainPhotoSelected1 = (e) => {
    
   dispatch(saveMusicSuccess1(e.target.value));
    
       
    }


  const onMainPhotoSelected2 = (e) => {

        dispatch(saveMusicSuccess2(e.target.value));
    
      

    }

     const onMainPhotoSelected3 = (e) => {
  
   dispatch(saveMusicSuccess3(e.target.value));
   
    
    }
    
 
  return  <>

          <h2> Add Your favorite Music </h2>

      
      <div> {<input type="text"  onChange= {onMainPhotoSelected1}  />} {music1 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg>} </div>
    
      <div> {<input  type="text" onChange= {onMainPhotoSelected2}  />} {music2 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg>} </div>

      <div> {<input   type="text"  onChange= {onMainPhotoSelected3}  />} {music3 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg>} </div>
   
      <button onClick={props.activateEditeMode }> Save </button>

  
     </>

}



export default ProfileMusicForm;

  