import React from "react";
import logo from "../assets/images/cropMD-white.png";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="image">
          <img className="small fit" src={logo}></img>
        </div>
        <ul className="icons">
          <li>
            <a
              href="https://www.instagram.com/pistil_and_stamen/?hl=en"
              className="icon alt fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lizlove/liveoaklove"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            &copy; 2020, Live Oak Love{" "}
            <span role="img" aria-label="tree">
              🌳
            </span>
            <span role="img" aria-label="yellow heart">
              💛
            </span>
          </li>
          <li>
            <a href="https://www.instagram.com/p/B7Rzw-9lW4E/">
              Sunday is a good dog.
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Footer;
