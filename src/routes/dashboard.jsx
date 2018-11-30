import React from 'react';
import PropTypes from 'prop-types';

import Skills from './skills';
import Talent from './talent';
import Find from './find';
import NotFound from './404';
import YourOffice from './your-office';

import { Link, Redirect, Route, Switch, Router } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/styles/styles.css';
import '../css/styles/media.css';

function ActiveLink({ label, to, exact }) {
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <div className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
          </div>
        )}
      />
    );
  }

class Dashboard extends React.Component {



  renderNavigation = () => {
    const { userName, userImageUrl } = this.props
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
                    <a><ActiveLink exact={true} to='/dashboard/find' label='Find'/><div class='caret' /></a>
                  </li>
                  <li class=''>
                    <Link to='/dashboard/your-office'>Your office <div class='caret' /></Link>
                  </li>
                  <li class=''>
                    <Link to='/dashboard/how-it-works'>How it works <div class='caret' /></Link>
                  </li>
                  <li class='active'>
                    <Link to='/dashboard/ask-us'>Ask us <div class='caret' /></Link>
                  </li>
                </ul>
              </div>
            </section>
            <div class='user-box'>
              <div class='user-box-nav dropdown'>
                <a
                  href='#'
                  class='dropdown-toggle'
                  data-toggle='dropdown'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                <img class='user-photo' src={userImageUrl} />
                  {userName}
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
        <Switch>
          <Route path='/dashboard/find' component={Find} />
          <Route path='/dashboard/your-office' component={YourOffice} />
          <Route component={NotFound} />
        </Switch>
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
Dashboard.propTypes = {
  userName: PropTypes.string,
  userImageUrl: PropTypes.string,
};
export const stateToProps = state => {
  return {
    userName: state.loginReducer.user.full_name,
    userImageUrl: state.loginReducer.user.image.url
  };
};
export const dispatchToProps = dispatch => {
  return {
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(Dashboard);
