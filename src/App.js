import './App.css';
import React, { useState } from 'react';


import ReactHowler from 'react-howler';
function App() {
  
  const [isTest, setTest] = useState(true);
  const [isShown, setIsShown] = useState(true);
 
  
 
  const [playpause, setPlaypause] = useState(false);

 
 
 

  return (
    
    <div>
      <ReactHowler
        src="https://apelanche.com/sound/music.mp3"
        playing={playpause}
        loop={true}
      />
    <div className="background flex h-screen items-center relative ">
   
   
    <div className="flex justify-center items-center relative">
 <img className=' w-2/5 gif ' src={require('../src/assets/animation.gif')} alt="gif" />

 {
   isShown ? null: <img className=' w-2/5 absolute please ' src={require('../src/assets/media/test_please.png')} alt="gif" />
  
}

 

<div className='test absolute bottom-6 '>
  {isTest ? <a href="https://www.google.com.tr/?hl=tr" target="_blank" rel="noreferrer">
 <img onMouseOver={()=> setTest(false)} className='w-1/4 testIMg ' src={require('../src/assets/buttons/test_passive.png')} alt="gif" />   </a>:
 
 <a href="https://www.google.com.tr/?hl=tr" target="_blank" rel="noreferrer">
 <img onMouseLeave={()=> setTest(true)} className='w-1/4 testIMg ' src={require('../src/assets/buttons/test_active.png')} alt="gif" />   </a>}


 

</div>



 <div onClick={() => setPlaypause(!playpause)} className='rug absolute bottom-6 '>
 {
   isShown ? <img  onClick={() =>{
    setIsShown(false)
    
  }} className='w-1/4 rugIMg ' src={require('../src/assets/buttons/rug_passive.png')} alt="gif" />
   :
   <img onClick={() =>setIsShown(true)}  className='w-1/4 rugIMg' src={require('../src/assets/buttons/rug_active.png')} alt="gif" />
}

 </div>
 


 


</div>

<p className='absolute copy text-white bottom-0 right-0'>Copyright 2022</p>

    </div>
   
    </div>
  );
}

export default App;
