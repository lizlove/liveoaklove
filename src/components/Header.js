import React from "react";
import logo from "../assets/images/cropMD-white.png";

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-heart"></span>
          <img className="logo" src={logo}></img>
          <h1>Hello friends</h1>
          <p>
            Although we can't celebrate Denise + Megan's <em>Live Oak Love</em>{" "}
            together in NOLA,
            <br />
            we can still come together to gather gifts and good wishes.
          </p>
          <ul className="actions">
            <li>
              <a href="#video" className="button scrolly">
                <span role="img" aria-label="videocamera">
                  📹
                </span>{" "}
                Share a Video
              </a>
            </li>
            <li>
              <a href="#scrilla" className="button scrolly">
                Give a Gift{" "}
                <span role="img" aria-label="moneybag">
                  💰
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
