import { VerifyField,Action } from "./types";


const Reducer = (state: VerifyField, action: Action): VerifyField => {
  switch (action.type) {
    case "SETCODE":
      const newState = { ...state };
      newState.code[action.payload.index] = action.payload.value;
      return newState;
    case "SETERROR":
      return {
        ...state,
        error: { name: action.payload.name, message: action.payload.message, viewerror: action.payload.viewerror},
      };
    case "SETISEXPIREDFALSE":
      return {
        ...state,
        isExpired: false,
      };    case "SETISEXPIREDTRUE":
      return {
        ...state,
        isExpired: true,
      };
    default:
      throw new Error("Action not supported");
  }
};

export default Reducer;
