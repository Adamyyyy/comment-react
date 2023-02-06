import { createContext, useReducer } from "react";

import ListReducer from "./ListReducer";

const initialState = {
  comments: ["first comment", "second comment"],
};

// create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) => {
  // useReducer 获取state和dispatch
  const [state, dispatch] = useReducer(ListReducer, initialState);

  // actions
  function deleteComment(comment) {
    dispatch({
      type: "DELETE_COMMENT",
      payload: comment,
    });
  }

  function addComment(comment) {
    dispatch({
      type: "ADD_COMMENT",
      payload: comment,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        comments: state.comments,
        deleteComment,
        addComment,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
