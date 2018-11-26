import React from 'react';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/styles/styles.css';
import '../css/styles/media.css';

class Skills extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <nav class='main-top-nav flexbox justify-space-between'>
          <div class='logo'>
            <a class='logo-link' href='index.html'>
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
                      Teachers <div class='caret' />
                    </a>
                  </li>
                  <li class='active'>
                    <a href='#'>
                      Profile <div class='caret' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Favorites <div class='caret' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      About <div class='caret' />
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
                          <a
                            href='#overview'
                            aria-controls='overview'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-overview' />
                            Overview
                          </a>
                        </li>
                        <li role='presentation'>
                          <a
                            href='#messages'
                            aria-controls='messages'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-message' />
                            Messages
                          </a>
                        </li>
                        <li role='presentation'>
                          <a
                            href='#my-jobs'
                            aria-controls='my-jobs'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-jobs' />
                            My Jobs
                          </a>
                        </li>
                        <li role='presentation'>
                          <a
                            href='#my-promo'
                            aria-controls='my-promo'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-promo' />
                            My Promo
                          </a>
                        </li>
                        <li role='presentation' class='active'>
                          <a
                            href='#skills'
                            aria-controls='skills'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-skills' />
                            My Skills
                          </a>
                        </li>
                        <li role='presentation'>
                          <a
                            href='#saved'
                            aria-controls='saved'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-saved' />
                            Saved
                          </a>
                        </li>
                        <li role='presentation'>
                          <a
                            href='#media'
                            aria-controls='media'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-media' />
                            My Media
                          </a>
                        </li>
                        <li role='presentation'>
                          <a
                            href='#accounts'
                            aria-controls='accounts'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-accounts' />
                            Accounts
                          </a>
                        </li>
                        <li role='presentation'>
                          <a
                            href='#profile'
                            aria-controls='profile'
                            role='tab'
                            data-toggle='tab'
                          >
                            <span class='icon icon-profile' />
                            Profile
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      role='tabpanel'
                      className='tab-pane my-tab step-1-open'
                      id='skills'
                    >
                      <div className='steps-nav flexbox justify-space-between'>
                        <div className='steps-nav-title'>
                          Your Shared Skills
                        </div>
                        <div className='steps-nav-btn'>
                          <div className='btn-group step-2-btn clearfix'>
                            <button
                              type='button'
                              className='btn btn-blue-border btn-bold step-1-toggler step-toggler'
                            >
                              Back
                            </button>
                            <button
                              type='button'
                              className='btn btn-blue btn-bold step-3-toggler step-toggler'
                            >
                              Done
                            </button>
                          </div>
                          <button
                            type='button'
                            className='btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler'
                          >
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='step-1'>
                        <div className='skill-block skill-cat'>
                          <div className='skill-block-title'>
                            Choose Your Skill Category
                          </div>
                          <div className='skill-block-list'>
                            <form>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-1' />
                                <label for='cat-1'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-2' />
                                <label for='cat-2'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-3' />
                                <label for='cat-3'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-4' />
                                <label for='cat-4'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-5' />
                                <label for='cat-5'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-6' />
                                <label for='cat-6'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-7' />
                                <label for='cat-7'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-8' />
                                <label for='cat-8'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-9' />
                                <label for='cat-9'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                              <div className='checkbox-block'>
                                <input type='checkbox' id='cat-10' />
                                <label for='cat-10'>
                                  <span className='checkbox-circle'>
                                    <span className='icon icon-check-mark' />
                                  </span>
                                  <span className='checkbox-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                  </span>
                                </label>
                              </div>
                            </form>
                          </div>
                          <button
                            type='button'
                            className='btn btn-blue btn-bold step-2-toggler step-toggler'
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      <div className='step-2'>
                        <div className='skill-subcat'>
                          <div className='flexbox justify-space-between'>
                            <div className='skill-block'>
                              <div className='skill-block-title'>
                                Math &amp; Science
                              </div>
                              <div className='skill-block-list'>
                                <form>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-1' />
                                    <label for='math-1'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-2' />
                                    <label for='math-2'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-3' />
                                    <label for='math-3'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-4' />
                                    <label for='math-4'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-5' />
                                    <label for='math-5'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-6' />
                                    <label for='math-6'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-7' />
                                    <label for='math-7'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-8' />
                                    <label for='math-8'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-9' />
                                    <label for='math-9'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='math-10' />
                                    <label for='math-10'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className='skill-sub-block'>
                              <form className='form-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Write new skill'
                                />
                                <button className='add-btn btn btn-blue'>
                                  <span className='icon icon-add' />
                                </button>
                              </form>
                              <div className='skill-tags-block clearfix'>
                                <div className='skill-tag'>Math</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Math</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='skill-subcat'>
                          <div className='flexbox justify-space-between'>
                            <div className='skill-block'>
                              <div className='skill-block-title'>Biology</div>
                              <div className='skill-block-list'>
                                <form>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='biol-6' />
                                    <label for='biol-6'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input type='checkbox' id='biol-7' />
                                    <label for='biol-7'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className='skill-sub-block'>
                              <form className='form-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Write new skill'
                                />
                                <button className='add-btn btn btn-blue'>
                                  <span className='icon icon-add' />
                                </button>
                              </form>
                              <div className='skill-tags-block clearfix'>
                                <div className='skill-tag'>Math</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Math</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='step-3'>
                        <div className='skill-subcat skill-subcat--item'>
                          <div className='flexbox justify-space-between'>
                            <div className='skill-block'>
                              <div className='skill-block-title'>
                                Math &amp; Science
                              </div>
                              <div className='skill-block-list'>
                                <form>
                                  <div className='checkbox-block'>
                                    <input
                                      type='checkbox'
                                      id='math-1'
                                      checked
                                    />
                                    <label for='math-1'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input
                                      type='checkbox'
                                      id='math-2'
                                      checked
                                    />
                                    <label for='math-2'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input
                                      type='checkbox'
                                      id='math-3'
                                      checked
                                    />
                                    <label for='math-3'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input
                                      type='checkbox'
                                      id='math-4'
                                      checked
                                    />
                                    <label for='math-4'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                  <div className='checkbox-block'>
                                    <input
                                      type='checkbox'
                                      id='math-5'
                                      checked
                                    />
                                    <label for='math-5'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className='skill-sub-block'>
                              <div className='skill-block-title'>Skills</div>
                              <div className='skill-tags-block clearfix'>
                                <div className='skill-tag'>Math</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Math</div>
                              </div>
                            </div>
                          </div>
                          <div className='skill-block-footer'>
                            <a href='#'>View More</a>
                            <a href='#'>Edit</a>
                          </div>
                        </div>
                        <div className='skill-subcat skill-subcat--item'>
                          <div className='flexbox justify-space-between'>
                            <div className='skill-block'>
                              <div className='skill-block-title'>Biology</div>
                              <div className='skill-block-list'>
                                <form>
                                  <div className='checkbox-block'>
                                    <input
                                      type='checkbox'
                                      id='biol-6'
                                      checked
                                    />
                                    <label for='biol-6'>
                                      <span className='checkbox-circle'>
                                        <span className='icon icon-check-mark' />
                                      </span>
                                      <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </span>
                                    </label>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className='skill-sub-block'>
                              <div className='skill-block-title'>Skills</div>
                              <div className='skill-tags-block clearfix'>
                                <div className='skill-tag'>Math</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Trigonometry</div>
                                <div className='skill-tag'>Calculus</div>
                                <div className='skill-tag'>Math</div>
                              </div>
                            </div>
                          </div>
                          <div className='skill-block-footer'>
                            <a href='#'>View More</a>
                            <a href='#'>Edit</a>
                          </div>
                        </div>
                        <div className='skill-subcat skill-subcat--new'>
                          <div className='skill-block-title'>
                            New Skill Category
                          </div>
                          <div className='flexbox justify-space-between'>
                            <div className='skill-block'>
                              <form>
                                <div className='input-block'>
                                  Category
                                  <input
                                    type='text'
                                    placeholder='Insert your new category here..'
                                  />
                                </div>
                              </form>
                            </div>
                            <div className='skill-block'>
                              <form>
                                <div className='input-block'>
                                  Subcategory
                                  <input
                                    type='text'
                                    placeholder='Insert your new subcategory here..'
                                  />
                                </div>
                              </form>
                            </div>
                            <div className='skill-sub-block'>
                              <div className='skill-block-title'>Skills</div>
                              <form className='form-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Write new skill'
                                />
                                <button className='add-btn btn btn-blue'>
                                  <span className='icon icon-add' />
                                </button>
                              </form>
                              <div className='skill-tags-block clearfix'>
                                <div className='skill-tag'>Math</div>
                                <div className='skill-tag'>Trigonometry</div>
                              </div>
                            </div>
                          </div>
                          <button
                            type='button'
                            className='btn btn-blue add-skill-btn'
                          >
                            Add Skill Category
                          </button>
                        </div>
                        <div className='skills-footer'>
                          <a href='#'>
                            <span className='icon icon-add btn btn-blue add-btn' />
                            Add Here New Teachers Skill Category
                          </a>
                        </div>
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
export default Skills;
