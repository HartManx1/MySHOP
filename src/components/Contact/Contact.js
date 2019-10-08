import React from "react";
import './Contact.css';

export class Contact extends React.Component {
  render() {
    return <div className="Contact">
    <h1>Contact:</h1>
    <h2 className="Info"><span className="fas fa-mobile-alt"></span> +48 693 323 283</h2>
    <h2 className="Info"><span className="far fa-envelope"></span> grail@point.com</h2>
    <span className="Hours">from monday to sunday 08:00am - 06:00pm </span>
    
</div>

  }
}