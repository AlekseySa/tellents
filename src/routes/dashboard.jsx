import React from 'react';

import Skills from './skills';
import Talent from './talent'

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/styles/styles.css';
import '../css/styles/media.css';

class Dashboard extends React.Component {



  renderNavigation = () => {
    return (
      <div>
        <nav class='main-top-nav flexbox justify-space-between'>
          <div class='logo'>
            <a class='logo-link' href='/'>
              <img src='images/logo.png' height='39' width='auto' />
            </a>
          </div>
          <div type='button' class='humburger-icon'>
            <button type='button' class='btn btn-bg-transparent'>
              <span class='icon icon-menu' />
            </button>
          </div>
          <section class='nav-mobile flexbox justify-space-between'>
            <section class='nav-tablet flexbox justify-space-center'>
              <div class='search-form'>
                <form class='my-search-form' role='search'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Search'
                  />
                  <div class='search-filter radio-block'>
                    <div class='radio'>
                      <input
                        type='radio'
                        name='profile-page-filter'
                        id='jobs-filter'
                        value='jobs-filter'
                        checked
                      />
                      <label for='jobs-filter'>
                        <span class='radio-text'>Jobs</span>
                      </label>
                    </div>
                    <div class='radio'>
                      <input
                        type='radio'
                        name='profile-page-filter'
                        id='talents-filter'
                        value='talents-filter'
                      />
                      <label for='talents-filter'>
                        <span class='radio-text'>Talents</span>
                      </label>
                    </div>
                  </div>
                  <a href='' type='submit' class='btn-search'>
                    <i class='icon icon-loupe' />
                  </a>
                </form>
              </div>
              <div class='nav-list'>
                <ul class='flexbox justify-space-between'>
                  <li>
                    <a href='#'>
                      Find <div class='caret' />
                    </a>
                  </li>
                  <li class='active'>
                    <a href='#'>
                      Your office <div class='caret' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      How it works <div class='caret' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Ask us <div class='caret' />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <div class='user-box'>
              <div class='user-photo'>
                <i class='notif' />
              </div>
              <div class='user-box-nav dropdown'>
                <a
                  href='#'
                  class='dropdown-toggle'
                  data-toggle='dropdown'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Philip Seamor
                  <span class='caret' />
                </a>
                <ul class='dropdown-menu'>
                  <li>
                    <a href='#'>Action</a>
                  </li>
                  <li>
                    <a href='#'>Another action</a>
                  </li>
                  <li>
                    <a href='#'>Something else here</a>
                  </li>
                  <li>
                    <a href='#'>One more separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </nav>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderNavigation()}

      </div>
    );
  }
}
export default Dashboard;
