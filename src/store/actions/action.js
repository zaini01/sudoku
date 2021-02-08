import axios from "axios";

export function fetchBoard() {
  return (dispatch) => {
    axios
      .get("http://sugoku.herokuapp.com/board?difficulty=easy")
      .then(({ data }) => {
        dispatch(setBoard(data.board));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function submit() {
  return (dispatch) => {
    axios
      .post("https://sugoku.herokuapp.com/validate")
      .then(({ data }) => {
        dispatch(setStatus(data.status));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function setBoard(payload) {
  return {
    type: "SET_BOARD",
    payload: payload,
  };
}

export function setStatus(payload) {
  payload = payload.toUpperCase();
  return {
    type: "SET_STATUS",
    payload: payload,
  };
}
