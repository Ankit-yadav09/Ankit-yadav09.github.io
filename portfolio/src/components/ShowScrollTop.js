import React, { useEffect, useState } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa';
import styles from "../styles/middle.module.css"

const ShowScrollTop = () => {

    const [ShowScrollTopBtn, setShowScrollTopBtn] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 300){
            setShowScrollTopBtn(true);
            }else{
                setShowScrollTopBtn(false);
            }
        })
        
    },[]);

    const scrollToTop = ()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
    }

  return (
    <div>
        {ShowScrollTopBtn && <FaAngleDoubleUp className={styles.scrollTopbtn} onClick={scrollToTop} />}
    </div>
  )
}

export default ShowScrollTop