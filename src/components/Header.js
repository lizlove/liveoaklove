import React from "react";
import dandm from "../assets/images/dandm.png";

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <img className="image icon major" src={dandm}></img>
          <h1>Hello friends</h1>
          {/* <span className="icon major fa-heart"></span> */}
          <p>
            Although we can't celebrate Denise + Megan's{" "}
            <a
              alt="dandm"
              href="http://www.pistilandstamenflowers.com/liveoaklove"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Oak Love
            </a>{" "}
            this month,
            <br /> we can still gather gifts and good wishes.
          </p>
          <p>
            Please <b>don't spill the beans.</b> This is a surprise!
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
