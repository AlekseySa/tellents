import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div class="wrapper err-404-page">


          <div class="content">
            <div class="err-404-wrapper">
              <div class="err-404-title bg-cover">
                <h2>404</h2>
              </div>
              <div class="err-404-content">
                <h2 class="blue-color">This page doesn't exist.</h2>
                <a href="/home" class="btn btn-blue btn-with-icon">
                  <span class="flexbox">
                    <span class="icon icon-reply" />
                    <span>HOME PAGE</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <footer class="bg-white no-mrg">
            <div class="container">
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
