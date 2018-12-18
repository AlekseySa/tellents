import { createAction } from 'redux-actions';
import * as TYPES from './types';
import { http } from '../../service/httpService';

const setProfessions = createAction(TYPES.SET_PROFESSIONS);
const setProfessionsList = createAction(TYPES.SET_PROFESSIONS_LIST);
const checkProfession = createAction(TYPES.CHECK_PROFESSION);
const changeProfession = createAction(TYPES.CHANGE_PROFESSION);
const postChangeProfessions = createAction(TYPES.POST_CHANGE_PROFESSIONS);
const setTagList = createAction(TYPES.SET_TAG_LIST);

export const setSkills = () => async dispatch => {
  try {
    const s = await http()
      .get('/profile/skills/user')
      .then(response => response.data.profession_categories);
    dispatch(setProfessions(s));
  } catch (error) {
    console.error(error);
  }
};
export const changeTag = tag => async dispatch => {
  try {
    const s = await http()
      .get(`/profile/skills/search?q=${tag}`)
      .then(response => response.data.skills);
    dispatch(setTagList(s));
  } catch (error) {
    console.error(error);
  }
};
export const setProf = s => dispatch => {
  dispatch(setProfessionsList(s));
};

export const checkProf = s => dispatch => {
  dispatch(checkProfession(s));
};

export const changeProf = s => dispatch => {
  dispatch(changeProfession(s));
};

export const postDeleteProf = (checkProfession, professionsList) => async dispatch => {
  try {
    const categories2 = professionsList;
    const categories = categories2
      .filter(prof => !(prof.id === checkProfession.id))
      .map(prof => ({
        id: prof.id,
        skill_categories: prof.skill_categories
          .filter(skill => skill.selected)
          .map(skill => {
            const id = skill.id;
            return id;
          }),
        skill_tags: prof.skill_tags,
      }));
    await http().post('/profile/skills', { categories });
    dispatch(postChangeProfessions(professionsList));
  } catch (error) {
    console.error(error);
  }
};

export const postChangeProf = (checkProfession, professionsList) => async dispatch => {
  try {
    // categories = [ { id, skill_categories = [ id ], skill_tags = [ { id, name } ] } ]
    // Prof = { id, name, selected, skill_categories [ { id, name, selected } ], skill_tags [ { id, name } ] }
    const categories2 = professionsList;
    if (professionsList.filter(prof => prof.id === checkProfession.id).length) {
      categories2.map(prof => (prof.id === checkProfession.id ? checkProfession : prof));
    } else {
      categories2.push(checkProfession);
    }
    const categories = categories2.map(prof => ({
      id: prof.id,
      skill_categories: prof.skill_categories
        .filter(skill => skill.selected)
        .map(skill => {
          const id = skill.id;
          return id;
        }),
      skill_tags: prof.skill_tags,
    }));
    await http().post('/profile/skills', { categories });
    dispatch(postChangeProfessions(professionsList));
  } catch (error) {
    console.error(error);
  }
};
