import React from "react";

class Video extends React.Component {
  render() {
    let videoSrcURL = "https://www.youtube.com/embed/HuT0ZlmfG90";
    return (
      <div className="video">
        <iframe
          src={videoSrcURL}
          videoTitle="LiveOakLove"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    );
  }
}
export default Video;
