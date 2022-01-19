import React from "react";
import HomeStyle from "./Home.module.css";


const Home = () => {
  return (
    <div className={HomeStyle['main']}>
      <div className={HomeStyle['main_text']}>
          <h1 className={HomeStyle['main_header']}>WE HAVE AWESOME THINGS</h1>
          <p className={HomeStyle['main_para']}>Let's make the web beautiful together</p>
          <button className={HomeStyle['main_button']}>View More</button>
          <ul className={HomeStyle['pagination']}>
            <li className={HomeStyle['pagination_item']}></li>
            <li className={HomeStyle['pagination_item']}></li>
            <li className={HomeStyle['pagination_item']}></li>
          </ul>
      </div>  
    </div>
  )
}

export default Home;
