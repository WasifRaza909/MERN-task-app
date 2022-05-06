import {
  ADD_TASK,
  CLEAR_TASKS,
  DELETE_TASK,
  EDIT_TASK,
  GET_TASKS,
  RESET_EDIT_STATES,
  SET_TASKS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        tasks: action.payload,
      };

    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case CLEAR_TASKS:
      return {
        tasks: [],
      };

    case EDIT_TASK:
      return {
        ...state,
        editItem: action.payload,
        editState: true,
      };

    case SET_TASKS:
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case RESET_EDIT_STATES:
      return {
        ...state,
        editItem: {},
        editState: false,
      };

    default:
      return {
        state,
      };
  }
};
