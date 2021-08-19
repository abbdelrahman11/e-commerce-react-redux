import { ADD_COURSE, DELET_COURSE, UPDATE_COURSE, EDIT_ITEM } from "../types";

export const updateCourse = (e) => {
  const action = {
    type: UPDATE_COURSE,
    e,
  };
  return action;
};

export const addCourse = (e) => {
  const action = {
    type: ADD_COURSE,
    e,
  };
  return action;
};
export const daletItem = (index) => {
  const action = {
    type: DELET_COURSE,
    index,
  };
  return action;
};
export const editItem = (index, value) => {
  const action = {
    type: EDIT_ITEM,
    index,
    value,
  };
  return action;
};
