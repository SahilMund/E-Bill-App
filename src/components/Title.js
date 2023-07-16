import React ,{useState} from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness2Icon from '@mui/icons-material/Brightness2';

const Title = ({darkmode,setDarkmode}) => {


  const changeMode = () =>{
    if(darkmode == true){
      setDarkmode(false)
    }else{
      setDarkmode(true)
    }
    
  }
  return (
    <div className="title">
      <h1>E-Billing App</h1>
      <div className="parent__icon__dark">
      <span className="icon__dark" onClick={changeMode}>
     { darkmode ? <Brightness4Icon/> :<Brightness2Icon /> }
      </span>
   
      </div>
      <p>User can upload their e-bill PDF and then OCR will perform on it</p>
    </div>
  )
}

export default Title;