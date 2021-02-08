const initialState = {
  board: [],
  status: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BOARD":
      return { ...state, board: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    default:
      return state;
  }
}
