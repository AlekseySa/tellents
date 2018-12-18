import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper err-404-page">
          <div className="content">
            <div className="err-404-wrapper">
              <div className="err-404-title bg-cover">
                <h2>404</h2>
              </div>
              <div className="err-404-content">
                <h2 className="blue-color">This page doesn't exist.</h2>
                <a href="/home" className="btn btn-blue btn-with-icon">
                  <span className="flexbox">
                    <span className="icon icon-reply" />
                    <span>HOME PAGE</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <footer className="bg-white no-mrg">
            <div className="container">
              <span>© 2016 Talents </span>
              <ul>
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default NotFound;
