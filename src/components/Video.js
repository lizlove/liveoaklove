import React from "react";

class Video extends React.Component {
  render() {
    console.log("🐶", this.props);
    return (
      <div className="video">
        <iframe
          src={this.props.videoSrcURL}
          videoTitle={this.props.videoTitle}
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
