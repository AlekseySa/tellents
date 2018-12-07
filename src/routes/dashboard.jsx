import React from 'react';
import PropTypes from 'prop-types';

import { Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Find from './find';
import NotFound from './404';
import YourOffice from './your-office';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/styles/styles.css';
import '../css/styles/media.css';

function ActiveLink({ label, to, exact }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <div className={match ? 'active' : ''}>
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}

class Dashboard extends React.Component {
  renderNavigation = () => {
    const { userName, userImageUrl } = this.props;
    return (
      <div>
        <nav className="main-top-nav flexbox justify-space-between">
          <div className="logo">
            <a className="logo-link" href="/">
              <img src="images/logo.png" height="39" width="auto" />
            </a>
          </div>
          <div type="button" className="humburger-icon">
            <button type="button" className="btn btn-bg-transparent">
              <span className="icon icon-menu" />
            </button>
          </div>
          <section className="nav-mobile flexbox justify-space-between">
            <section className="nav-tablet flexbox justify-space-center">
              <div className="search-form">
                <form className="my-search-form" role="search">
                  <input type="text" className="form-control" placeholder="Search" />
                  <div className="search-filter radio-block">
                    <div className="radio">
                      <input type="radio" name="profile-page-filter" id="jobs-filter" value="jobs-filter" checked />
                      <label for="jobs-filter">
                        <span className="radio-text">Jobs</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="profile-page-filter" id="talents-filter" value="talents-filter" />
                      <label for="talents-filter">
                        <span className="radio-text">Talents</span>
                      </label>
                    </div>
                  </div>
                  <a href="" type="submit" className="btn-search">
                    <i className="icon icon-loupe" />
                  </a>
                </form>
              </div>
              <div className="nav-list">
                <ul className="flexbox justify-space-between">
                  <li>
                    <a>
                      <ActiveLink exact={true} to="/dashboard/find" label="Find" />
                      <div className="caret" />
                    </a>
                  </li>
                  <li className="">
                    <Link to="/dashboard/your-office">
                      Your office <div className="caret" />
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/dashboard/how-it-works">
                      How it works <div className="caret" />
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/dashboard/ask-us">
                      Ask us <div className="caret" />
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <div className="user-box">
              <div className="user-box-nav dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="user-photo" src={userImageUrl} />
                  {userName}
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </nav>
        <Switch>
          <Route path="/dashboard/find" component={Find} />
          <Route path="/dashboard/your-office" component={YourOffice} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  };

  render() {
    return <div>{this.renderNavigation()}</div>;
  }
}
Dashboard.propTypes = {
  userName: PropTypes.string,
  userImageUrl: PropTypes.string,
};
export const stateToProps = state => ({
  userName: state.loginReducer.user.full_name,
  userImageUrl: state.loginReducer.user.image.url,
});
export const dispatchToProps = dispatch => ({});
export default connect(
  stateToProps,
  dispatchToProps,
)(Dashboard);
