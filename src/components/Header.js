import React from "react";
import Video from "./Video";

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <div className="video-container">
            <Video />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
