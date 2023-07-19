import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import "./scss/index.scss"
import Navbar from "./components/Navbar";
import {Box} from "@mui/material";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (

    <Box sx={{width: '100%', m: 'auto'}}>
        <Navbar/>

    </Box>

      // <Provider store={store}>
    //   <SignupForm />
    //   <SigninForm />
    // </Provider>
  );
};

export default App;
