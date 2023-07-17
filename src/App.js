import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <SignupForm />
      <SigninForm />
    </Provider>
  );
};

export default App;
