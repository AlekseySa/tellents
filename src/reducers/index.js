import { combineReducers } from 'redux';

import { loginReducer } from './login/login';
import { skillsReducer } from './skills/skills';
import { findReducer } from './find/find';

export default combineReducers({
  loginReducer,
  skillsReducer,
  findReducer,
});
