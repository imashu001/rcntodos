import Task from "../task";
import { ADD_TASK } from "../actions/index";

const initialState = {
  tasks: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        task: [...state.tasks, action.tasks],
      };
    default:
      return state;
  }
}
