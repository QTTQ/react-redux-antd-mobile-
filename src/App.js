import React, { Component, ReactPropTypes } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Layout from "./containers/Layout/Layout";



store.subscribe(() => {
  console.log('store.getState()', store.getState());
})

const App = () => (
  <Provider store={store}>
    {/* // <BrowserRouter history={history}> */}
    <BrowserRouter>
      <div>
        <Route path='/' exact component={Login} />
        <Route path='/Layout' exact component={Layout} />
        <Route path='/Register' component={Register} />
      </div>
    </BrowserRouter>
  </Provider>
)

export default App