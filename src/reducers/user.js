import { SET_USER } from '../constants';

export default function user(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}
