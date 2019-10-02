import React from "react";

import introimg from '../../img/intrologo.png'
import introback from '../../img/background_intro.2.jpg'
import './Root.css';


const WelcomePage = (props) => {
  return (
    <div className="intro">
      <h1 className="Slogan">Find Your Grail!</h1>

      <img src={introback} className="photo" alt="Welcome" />
      <a class="logo" href="/home">
        <button href="/home">Just click</button>
      </a>
    </div>
  );
}

export default WelcomePage;