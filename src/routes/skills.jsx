import React from 'react';

import { Link, Redirect, Route, Switch, Router } from 'react-router-dom';

import SkillList from '../components/skill-list';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/styles/styles.css';
import '../css/styles/media.css';

class Skills extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='content'>
          <div className='container-fluid'>
            <div className='panel panel-default my-main-panel'>
              <div className='panel-body'>
                <div className='left-col'>
                  <div class='flexbox'>
                    <div class='right-col'>
                      <ul
                        class='nav nav-pills nav-stacked my-sidebar'
                        role='tablist'
                      >
                        <li role='presentation'>
                          <Link
                            to='404'
                            aria-controls='overview'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-overview' />
                            Overview
                          </Link>
                        </li>
                        <li role='presentation'>
                          <Link
                            to='404'
                            aria-controls='messages'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-message' />
                            Messages
                          </Link>
                        </li>
                        <li role='presentation'>
                          <Link
                            to='404'
                            aria-controls='my-jobs'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-jobs' />
                            My Jobs
                          </Link>
                        </li>
                        <li role='presentation'>
                          <Link
                            to='404'
                            aria-controls='my-promo'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-promo' />
                            My Promo
                          </Link>
                        </li>
                        <li role='presentation' class='active'>
                          <a
                            href='skills'
                            aria-controls='skills'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-skills' />
                            My Skills
                          </a>
                        </li>
                        <li role='presentation'>
                          <Link
                            to='404'
                            aria-controls='saved'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-saved' />
                            Saved
                          </Link>
                        </li>
                        <li role='presentation'>
                          <Link
                            to='404'
                            aria-controls='media'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-media' />
                            My Media
                          </Link>
                        </li>
                        <li role='presentation'>
                          <Link
                            to='404'
                            aria-controls='accounts'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-accounts' />
                            Accounts
                          </Link>
                        </li>
                        <li role='presentation'>
                          <Link
                            to='404'
                            aria-controls='profile'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-profile' />
                            Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <SkillList />
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
export default Skills;
