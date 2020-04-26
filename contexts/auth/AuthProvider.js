import { authReducer } from "./authReducer";
import * as React from "react";

const initialAuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export const AuthStateContext = React.createContext();
console.log(AuthStateContext);

const AuthDispatchContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialAuthState);
  console.log("state " + state);
  return (
    // <AuthStateContext.Provider value={state}>
    //   <AuthDispatchContext.Provider value={dispatch}>
    //     {children}
    //   </AuthDispatchContext.Provider>
    // </AuthStateContext.Provider>

    <AuthStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthStateContext.Provider>
  );
};
