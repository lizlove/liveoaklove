import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import pic01 from "../assets/images/pic01.jpg";

class Homepage extends React.Component {
  render() {
    const siteTitle = "Live Oak Love";

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="video" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Share your love with <br />a special video message.
                </h2>
              </header>
              <p>
                We are going to compile a cool video of all your loving
                well-wishes.
              </p>
              <p> There are 3 ways to share:</p>
              <ol>
                <li>
                  Text to Josh at{" "}
                  <a href="sms:1-510-725-8602‬">(five-one-zero)-725-8602</a>
                </li>
                <li>
                  Email to{" "}
                  <a
                    href="mailto:name[at]whatever.com?Subject=Live%20Oak%20Love"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    name[at]whatever.com
                  </a>
                </li>
                <li>
                  Send via{" "}
                  <a
                    href="https://wetransfer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WeTransfer
                  </a>{" "}
                  to name[at]whatever.com.
                </li>{" "}
              </ol>
            </div>
            <div className="col-6">
              <span className="image fit">
                <iframe
                  src="https://giphy.com/embed/Tqp5YCaYh9Anm"
                  width="480"
                  height="365"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/prince-symbol-Tqp5YCaYh9Anm">
                    via GIPHY
                  </a>
                </p>
              </span>
            </div>
          </div>
        </section>

        <section id="scrilla" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>A Taste of Money, Honey?</h2>
            </header>
            <p>
              Since we cannot be present to make a present, you can still give a
              cash gift! Venmo info is below. <br />
              Please note that while the name on Venmo is Amelia B, all moneys
              will go to Megan and Denise.
            </p>
            <ul className="actions uniform">
              <li>
                <a
                  href="https://venmo.com/live-oak-love"
                  className="button special"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Venmo 💵
                </a>
              </li>
              <li>
                <a
                  href="https://venmo.com/live-oak-love"
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @live-oak-love
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/*
        <section id="donate" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code"></span>
                </li>
                <li>
                  <span className="icon style2 major fa-bolt"></span>
                </li>
                <li>
                  <span className="icon style3 major fa-camera-retro"></span>
                </li>
                <li>
                  <span className="icon style4 major fa-cog"></span>
                </li>
                <li>
                  <span className="icon style5 major fa-desktop"></span>
                </li>
                <li>
                  <span className="icon style6 major fa-calendar"></span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
              <p>
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
                varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat
                accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
                curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
          </div>
        </section> */}

        {/* <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Adipiscing amet consequat</h2>
              </header>
              <p>
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Ipsum feugiat consequat?</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section> */}
      </Layout>
    );
  }
}

export default Homepage;
