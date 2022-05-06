import {
  GET_TASKS,
  DELETE_TASK,
  CLEAR_TASKS,
  ADD_TASK,
  SET_EDIT_STATE,
  EDIT_TASK,
  RESET_EDIT_STATE,
} from "../constants/taskConstants";

export const taskReducer = (state = { tasks: [] }, action) => {
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

    case SET_EDIT_STATE:
      return {
        ...state,
        editItem: action.payload,
        editState: true,
      };

    case EDIT_TASK:
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case RESET_EDIT_STATE:
      return {
        ...state,
        editItem: {},
        editState: false,
      };

    case CLEAR_TASKS:
      return {
        tasks: [],
      };

    default:
      return state;
  }
};
