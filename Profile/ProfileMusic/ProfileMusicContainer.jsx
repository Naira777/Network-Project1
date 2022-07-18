import React, { useState, useEffect } from "react";
import ProfileMusicForm from "./ProfileMusic";
import { useSelector } from "react-redux";
import { getMusic1, getMusic2, getMusic3 } from "../../../Redux/profile-selectors";
import ReactPlayer from 'react-player';


const ProfileMusicPage = () => {
const [editMode, seteditMode]= useState(false);

const music1=useSelector(getMusic1);
const music2=useSelector(getMusic2);
const music3=useSelector(getMusic3);


useEffect(() => {
   if(music1 ||  music2 || music3){
seteditMode(true);
}

}, []);



  return (
<>
{!editMode &&  <ProfileMusicForm activateEditeMode={()=> seteditMode(true)} />}

{ editMode && <div>
      <div>
        <h2> Here is my favorite music!!!</h2>
      </div>
<div>

<button onClick={()=>{seteditMode(false)}} >Edit</button>

</div>
      <div>
      <div><b> 1. </b> </div>
        <ReactPlayer
url={music1}
/> 
      </div>

      <div>
      <div><b> 2. </b> </div>
        <ReactPlayer
url={music2}
/>
        
      </div>

      <div>
      <div><b> 3. </b> </div>
        <ReactPlayer
url={music3}
/>

      </div>
    </div>
  
  }
  </>
  )
}

export default ProfileMusicPage;