import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link, Redirect, Route, Switch, Router } from 'react-router-dom';

import Talent from '../talent';
import NotFound from '../404';
import Job from '../job';

import '../../css/find.css';

class Find extends React.Component {
  renderFind = () => {
    const { userName } = this.props;
    return (
      <div>
        <div className="content">
          <div className="container-fluid">
            <div className="row content-header flexbox">
              <div className="col-xs-2 left-sidebar">
                <div className="hello-header">
                  <div className="blue-color hello-header-name">
                    <span className="user-name">Hi {userName}</span>,
                  </div>
                  <div className="hello-header-text">What are you looking for today?</div>
                </div>
              </div>
              <div className="col-xs-10">
                <div className="search-form">
                  <form className="my-search-form" role="search">
                    <input type="text" className="form-control" placeholder="Search for ..." />
                    <div className="search-filter radio-block clearfix">
                      <div className="radio">
                        <input type="radio" name="home-page-filter" id="jobs-filter-1" value="jobs-filter" checked />
                        <label for="jobs-filter-1">
                          <span className="radio-text mobile-hide">Jobs</span>
                          <span className="radio-text mobile-show">J</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="home-page-filter" id="talents-filter-1" value="talents-filter" />
                        <label for="talents-filter-1">
                          <span className="radio-text mobile-hide">Talents</span>
                          <span className="radio-text mobile-show">T</span>
                        </label>
                      </div>
                    </div>
                    <a href="" type="submit" className="btn-search">
                      <i className="icon icon-loupe" />
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="row job-boxes-header flexbox">
              <div className="col-xs-2 left-sidebar left-col-top">
                <div className="panel panel-default panel-gray job-boxes-filter">
                  <div className="search-filter radio-block flexbox justify-space-center">
                    <Link to="/dashboard/find/job">
                      <div className="radio">
                        <input type="radio" name="job-boxes-filter" id="jobs-filter-2" value="jobs-filter" checked />
                        <label for="jobs-filter-2">
                          <span className="radio-text">Jobs</span>
                        </label>
                      </div>
                    </Link>
                    <button type="button" className="btn radio-switcher clearfix">
                      <div className="circul-shape">
                        <span className="icon icon-check-mark" />
                      </div>
                    </button>
                    <Link to="/dashboard/find/talent">
                      <div className="radio">
                        <input type="radio" name="job-boxes-filter" id="talents-filter-2" value="talents-filter" />
                        <label for="talents-filter-2">
                          <span className="radio-text">Talents</span>
                        </label>
                      </div>
                    </Link>
                  </div>
                </div>
                <button className="btn filter-btn panel-gray">
                  <div className="flexbox justify-space-between">
                    <span>Advanced Filters</span>
                    <span className="icon icon-next-arrow" />
                  </div>
                </button>
              </div>
              <div className="col-xs-10">
                <div className="panel panel-default panel-gray job-boxes-nav">
                  <nav className="flexbox justify-space-between">
                    <div className="filter-nav" />
                    <div className="sort-nav">
                      <span className="sort-nav-title">Sort By</span>
                      <button type="button" className="btn">
                        <div className="my-select-box">
                          <span className="my-select-result">
                            <span className="text">Relevance</span>
                            <span className="icon icon-down-arrow" />
                          </span>
                          <div className="my-select-options">
                            <div className="caret-block">
                              <span className="caret-top" />
                            </div>
                            <div className="radio-block">
                              <div className="radio">
                                <input
                                  type="radio"
                                  name="jobs-sort-option"
                                  id="jobs-sort-option-1"
                                  value="jobs-sort-option-1"
                                  checked=""
                                />
                                <label for="jobs-sort-option-1">
                                  <span className="check-mark icon icon-check-mark" />
                                  <span className="radio-text">Relevance</span>
                                </label>
                              </div>
                              <div className="radio">
                                <input
                                  type="radio"
                                  name="jobs-sort-option"
                                  id="jobs-sort-option-2"
                                  value="jobs-sort-option-2"
                                />
                                <label for="jobs-sort-option-2">
                                  <span className="check-mark icon icon-check-mark" />
                                  <span className="radio-text">Date</span>
                                </label>
                              </div>
                              <div className="radio">
                                <input
                                  type="radio"
                                  name="jobs-sort-option"
                                  id="jobs-sort-option-3"
                                  value="jobs-sort-option-3"
                                />
                                <label for="jobs-sort-option-3">
                                  <span className="check-mark icon icon-check-mark" />
                                  <span className="radio-text">Rate</span>
                                </label>
                              </div>
                              <div className="radio">
                                <input
                                  type="radio"
                                  name="jobs-sort-option"
                                  id="jobs-sort-option-4"
                                  value="jobs-sort-option-4"
                                />
                                <label for="jobs-sort-option-4">
                                  <span className="check-mark icon icon-check-mark" />
                                  <span className="radio-text">Alfabet</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                      <span className="sort-result">
                        Result:
                        <span className="sort-result-numb">25</span>
                      </span>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <Switch>
              <Route path="/dashboard/find/job" component={Job} />
              <Route path="/dashboard/find/talent" component={Talent} />
              <Redirect from="/dashboard/find" to="/dashboard/find/talent" />
              <Route component={NotFound} />
            </Switch>
            <div className="row main-content flexbox">
              <div className="col-xs-10 container-fluid right-btns-margin job-boxes job-boxes--talents">
                <div className="flexbox row right-btns">
                  <div className="col-xs-3 right-sidebar">
                    <div className="panel panel-default panel-btn">
                      <a href="">
                        <i className="icon icon-hand" />
                        <span> Start New Project </span>
                      </a>
                    </div>
                    <div className="panel panel-default panel-btn">
                      <a href="">
                        <i className="icon icon-new" />
                        <span> Start New Promotion </span>
                      </a>
                    </div>
                    <div className="panel panel-default panel-btn">
                      <a href="">
                        <i className="icon icon-share" />
                        <span> Tell others Something that you know</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderFind()}</div>;
  }
}
Find.propTypes = {
  userName: PropTypes.string,
};
export const stateToProps = state => ({
  userName: state.loginReducer.user.full_name,
});
export const dispatchToProps = dispatch => ({});
export default connect(
  stateToProps,
  dispatchToProps,
)(Find);
