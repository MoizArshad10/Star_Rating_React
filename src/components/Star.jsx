import React, { useState } from 'react'

function Star() {
    const [rating , setRating] = useState();
    const [hover ,setHover] = useState()
    let arr = new Array(5).fill(0);
    console.log(arr);
    console.log(rating);
    
  return (
    <>
        <div className="container">
            {
                arr.map((currVale , index)=>{
                    return(
                        <span
                        className={hover== 0 && index<rating || index<hover ? "colored" : "unColor"}
                        onClick={()=>setRating(index+1)}
                        onMouseEnter={()=>setHover(index+1)}
                        >&#9733;</span>
                    )
                })
            }
        </div>
    </>
  )
}

export default Star