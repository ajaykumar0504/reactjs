import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = { bookings: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING":
      return { ...state, bookings: [...state.bookings, action.payload] };
    case "CANCEL_BOOKING":
      return { ...state, bookings: state.bookings.filter((_, i) => i !== action.payload) };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};