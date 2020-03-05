import React, { Component } from "react";
import "./footer.scss";
const Logo = require("../assets/logo_transparent.png");
// const Google = require("../assets/en_badge_web_generic (1).png");
// const IOS = require("../assets/app-store-download-button-png-5.png");
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__Grid">
          <div className="Footer__Grid__Left">
            <img src={Logo} alt="Logo"></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum tincidunt arcu, quis euismod enim feugiat at. Pellentesque
              arcu tellus, vehicula sit amet volutpat a, finibus eget leo.
              Mauris nec molestie lacus.
            </p>
          </div>
        </div>
        <div className="Footer__Grid__Center">
          <p>About Us</p>
          <p>Blogs</p>
          <p>Service</p>
          <p>Carreer</p>
          <p>Media Source</p>
        </div>
        <div className="Footer__Grid__Right">
          <h2>Download</h2>
          <div classNames="Footer__Grid__Right__Logo">
            {/* <img src={Google} alt="google"></img> */}
            {/* <img src={IOS} alt="google"></img> */}
          </div>
          <p>Android & iOS</p>
          <p>Social Media</p>
        </div>
      </div>
    );
  }
}

export default Footer;
