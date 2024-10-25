import React, { useEffect, useState } from 'react'

function Hocks() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`You clicked ${count} times`;
    });
  return (
    <div>
      <button onClick={()=>setCount(count +1)}>clickme
        
      </button>
    </div>
  )
}

export default Hocks
