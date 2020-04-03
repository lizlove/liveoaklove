import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
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
          <li>&copy; 2020, Live Oak Love 🌳💛</li>
          <li>
            Design: <a href="http://elizabethlovero.com">Lenny Bruce</a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Footer;
