import { ADD_COURSE, DELET_COURSE, UPDATE_COURSE, EDIT_ITEM } from "./type";

const reducers = ((state = []), action);
let reducers = [];

switch (action.type) {
  case ADD_COURSE:
    let current = state.current;
    let courses = state.courses;
    if (current) {
      reducers = [{ courses, current: "" }];
      courses.push({ name: current });
    }
    return reducers;
  case DELET_COURSE:
    let courses = state.courses;
    courses.splice(index, 1);
    reducers = [{ courses }];
    return reducers;
  case UPDATE_COURSE:
    console.log(e.target.value);
    reducers = [{ current: e.target.value }];
    return reducers;
  case EDIT_ITEM:
    let courses = state.courses;
    let course = courses[index];
    course["name"] = value;
    reducers = [{ courses, current: "" }];
    return reducers;
  default:
    return state;
}
