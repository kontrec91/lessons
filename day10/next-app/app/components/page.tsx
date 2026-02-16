'use client';

import { useState } from "react";

const LikeCounter = ()=> {
    const [count, setCount ]= useState(0);
    return (
        <>
            <p onClick={()=>setCount(prev=> prev + 1)}> ❤️ {count}</p>
        </>
    )
};

export default LikeCounter;


