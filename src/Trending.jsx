import React, { useRef, useState,useEffect } from 'react'
import './Trending.css'
import t1 from './assets/t1.jpg'
import t2 from './assets/t2.jpg'
import t3 from './assets/t3.jpg'
import t4 from './assets/t4.jpg'
import t5 from './assets/t5.jpg'
import t6 from './assets/t6.jpg'
import t7 from './assets/t7.jpg'
import t8 from './assets/t8.jpg'
import t9 from './assets/t9.jpg'
import t10 from './assets/t10.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';

const images = [
  {id:1,src:t1,alt:"img1"},
  {id:2,src:t2,alt:"img2"},
  {id:3,src:t3,alt:"img3"},
  {id:4,src:t4,alt:"img4"},
  {id:5,src:t5,alt:"img5"},
  {id:6,src:t6,alt:"img6"},
  {id:7,src:t7,alt:"img7"},
  {id:8,src:t8,alt:"img8"},
  {id:9,src:t9,alt:"img9"},
  {id:10,src:t10,alt:"img10"},
]

const Trending = () => {
    const sliderRef = useRef(null);
    const[ShowleftBtn,setShowleftbtn] = useState(false);
    const[ShowRightBtn,setShowRightbtn] = useState(true);
    const scrollAmt = 1300;

    const checkScroll = () =>{
      const slider = sliderRef.current;
      if(!slider) return;
      setShowleftbtn(slider.scrollLeft>0);
      const maxScrollleft = slider.scrollWidth - slider.clientWidth;
      setShowRightbtn(slider.scrollLeft<maxScrollleft);
    };

    const scrollRight = () =>{
      const slider = sliderRef.current;
      if(!slider) return;

      slider.scrollBy({left:scrollAmt,behavior:"smooth"});
      // setTimeout(checkScroll,1300);
      onscroll(checkScroll,1300);
    }

    const scrollLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({ left: -scrollAmt, behavior: "smooth" });
    setTimeout(checkScroll, 1300);
  };

    useEffect(() => {
    checkScroll();
  }, []);

  return (
    <>
      <div className="trending">
        <h3>Trending Now</h3>
        <div className="container">
          {ShowleftBtn && (
          <button class="leftbtn" onClick={scrollLeft}><i class="bi bi-chevron-left"></i></button>
          )}

          <div className="container" ref={sliderRef} onScroll={checkScroll}>
         {images.map(img => (
      <img 
      key={img.id} 
      src={img.src} 
      alt={img.alt} 
      />
  ))}
        </div>
          {ShowRightBtn && (
          <button  class="rightbtn" onClick={scrollRight}><i class="bi bi-chevron-right"></i></button>
          )}  
        </div>
      </div>
    </>
  )
}

export default Trending
