import React from "react";

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-heart"></span>
          <h1>
            Oh, hello.
            <br />
            It seems you are another fine <br /> friend of{" "}
            <a href="http://www.pistilandstamenflowers.com/">
              Megan and Denise
            </a>
            .
          </h1>
          <p>
            While we cannot celebrate live oak love together in NOLA,
            <br />
            we can still come together to gather gifts and good wishes.
          </p>
          <ul className="actions">
            <li>
              <a href="#video" className="button scrolly">
                📹 Share a Video
              </a>
            </li>
            <li>
              <a href="#scrilla" className="button scrolly">
                Give a Gift 💰
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
