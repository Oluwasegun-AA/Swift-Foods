import React from 'react';
import {
  facebookImg,
  twitterImg,
  instagramImg,
  githubImg,
  googlePlusImg,
  youtubeImg
} from '../styles/images';

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footerContent">
        <div className="termsWithIcons">
          <a href="LICENSE.md">
            <div className="terms">
              <h4>TERMS AND CONDITIONS</h4>
            </div>
          </a>
          <div className="socialIcons">
            <a
              className="facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="facebook-img"
                src={facebookImg}
                title=""
                alt="Facebook"
              />
            </a>
            <a
              className="googlePlus"
              href="https://plus.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="twitter-img"
                src={googlePlusImg}
                title=""
                alt="twitter"
              />
            </a>
            <a
              className="twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="google-plus-img"
                src={twitterImg}
                title=""
                alt="google Plus"
              />
            </a>
            <a
              className="youtube"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="youtube-img"
                src={youtubeImg}
                title=""
                alt="Facebook"
              />
            </a>
            <a
              className="github"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="github-img"
                src={githubImg}
                title=""
                alt="github"
              />
            </a>
            <a
              className="instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="instagram-img"
                src={instagramImg}
                title=""
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <article
        className="license"
      >
        © 2018 Fast Food Fast. All Rights Reserved
      </article>
    </div>
  </footer>
);

export default Footer;
