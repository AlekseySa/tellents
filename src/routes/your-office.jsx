import React from 'react';

import { Link, Redirect, Route, Switch, Router } from 'react-router-dom';
import Skills from './skills';
import NotFound from './404';

class YourOffice extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="content">
            <div className="container-fluid">
              <div className="panel panel-default my-main-panel">
                <div className="panel-body">
                  <div className="left-col">
                    <div className="flexbox">
                      <div className="right-col">
                        <ul className="nav nav-pills nav-stacked my-sidebar" role="tablist">
                          <li role="presentation">
                            <Link to="/404" aria-controls="overview" role="tab" data-toggle="tab">
                              <span className="icon icon-overview" />
                              Overview
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link to="/404" aria-controls="messages" role="tab" data-toggle="tab">
                              <span className="icon icon-message" />
                              Messages
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link to="/404" aria-controls="my-jobs" role="tab" data-toggle="tab">
                              <span className="icon icon-jobs" />
                              My Jobs
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link to="/404" aria-controls="my-promo" role="tab" data-toggle="tab">
                              <span className="icon icon-promo" />
                              My Promo
                            </Link>
                          </li>
                          <li role="presentation" className="active">
                            <a href="skills" aria-controls="skills" role="tab" data-toggle="tab">
                              <span className="icon icon-skills" />
                              My Skills
                            </a>
                          </li>
                          <li role="presentation">
                            <Link to="/404" aria-controls="saved" role="tab" data-toggle="tab">
                              <span className="icon icon-saved" />
                              Saved
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link to="/404" aria-controls="media" role="tab" data-toggle="tab">
                              <span className="icon icon-media" />
                              My Media
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link to="/404" aria-controls="accounts" role="tab" data-toggle="tab">
                              <span className="icon icon-accounts" />
                              Accounts
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link to="/404" aria-controls="profile" role="tab" data-toggle="tab">
                              <span className="icon icon-profile" />
                              Profile
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="skill-edit">
                        <Switch>
                          <Route path="/dashboard/your-office/skills" component={Skills} />
                          <Redirect from="/dashboard/your-office" to="/dashboard/your-office/skills" />
                          <Route component={NotFound} />
                        </Switch>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YourOffice;
