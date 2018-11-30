import { combineReducers } from 'redux';

import { loginReducer } from './login';
import { skillsReducer } from '../skills/skills';

export default combineReducers({
  loginReducer,
  skillsReducer
});
