import { withTheme } from '@emotion/react';
import React, { useState, useEffect } from 'react'

const Topfab = () => {
  const [showFab, setShowFab] = useState(false);

  const fabStyles= {
    position: 'fixed',
    bottom: 60,
    right: 50,
    backgroundColor: 'rgb(37 99 235)',
    height: 50,
    width: 50,
    borderRadius: 4,
    color: "white",
    fontSize: 32,

  }

  function handleScroll(){
      const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
      if(scrollHeight > 180) setShowFab(true);
      else setShowFab(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  
  return (
    <>
    {
        showFab && 
        <button style={fabStyles} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} >  &uarr;</button>
    }
    </>
  )
}

export default Topfab;