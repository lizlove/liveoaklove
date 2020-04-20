import React from "react";
import Video from "./Video";

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <div className="video-container">
            <Video
              videoSrcURL={"https://www.youtube.com/embed/HmtRUJZdLfY"}
              videoTitle={"LiveOakLove"}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
