import { HOME_1, HOME_2, HOME_3, HOME_4, HOME_5 } from "../action/type";

const home = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_1:
      return {
        ...state,
        home1: payload,
      };
    case HOME_2:
      return {
        ...state,
        home2: payload,
      };
    case HOME_3:
      return {
        ...state,
        home3: payload,
      };
    case HOME_4:
      return {
        ...state,
        home4: payload,
      };
    case HOME_5:
      return {
        ...state,
        home5: payload,
      };
    default:
      return state;
  }
};
export default home;
