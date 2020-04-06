import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
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
                <h2>Make a Video Card</h2>
              </header>
              <p>
                We're creating a collective video card for Denise + Megan! Put
                together, all of our pieces will mimic the silly, lovey vibes of
                a wedding dance party. Here are the suggested steps for
                contributing a video:
              </p>
              <ol>
                <li>
                  Put on a stylish outfit. (This <em>is</em> a wedding after
                  all.)
                </li>
                <li>
                  Turn on{" "}
                  <a href="https://www.youtube.com/watch?v=3GwjfUFyY6M">
                    <em>Celebrate</em> by Kool + The Gang
                  </a>
                </li>
                <li>
                  Press <b>record</b> on your phone or laptop camera. Suggested
                  video length: 1 minute or less (since there are 100+ people
                  invited to this *surprise* dance party).
                </li>
                <li>
                  Show off some dance moves and/or say your congratulations to
                  the brides.
                </li>
                <li>
                  Please send the file to us by <b>April 16.</b> There are
                  several ways you do it:
                  <ul>
                    <li>
                      Text to{" "}
                      <a href="sms:1-510-725-8602‬">(five-one-zero)-725-8602</a>
                    </li>
                    <li>
                      Email to{" "}
                      <a
                        href="mailto:liveoakloveletters@gmail.com?Subject=Live%20Oak%20Love"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        liveoakloveletters[at]gmail.com
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
                      to liveoakloveletters[at]gmail.com
                    </li>{" "}
                  </ul>
                </li>
              </ol>
            </div>
            <div className="col-6">
              <span className="image fit">
                <div
                  style={{
                    width: "100%",
                    height: 0,
                    paddingBottom: "76%",
                    position: "relative",
                  }}
                >
                  <iframe
                    src="https://giphy.com/embed/Tqp5YCaYh9Anm"
                    width="100%"
                    height="100%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                  ></iframe>
                </div>
              </span>
            </div>
          </div>
        </section>

        <section id="scrilla" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Give a Gift</h2>
            </header>
            <p>
              Even though we can't celebrate together, you can still give a
              present. Venmo info is below.
              <br />
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
                  Venmo{" "}
                  <span role="img" aria-label="money">
                    💵
                  </span>
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
      </Layout>
    );
  }
}

export default Homepage;
