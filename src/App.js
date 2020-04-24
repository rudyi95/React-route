import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "../src/App.css";

import Header from "./Components/header/index";
import MainLink from "./Components/main/index";
import Contactslink from "./Components/contacts/index";
import GalleryLink from "./Components/photos/Photos/index";
import PostsLink from "./Components/posts/index";

export default function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/posts">
            <PostsLink />
          </Route>
          <Route path="/contacts">
            <Contactslink />
          </Route>
          <Route path="/gallery">
            <GalleryLink />
          </Route>
          <Route exact path="/">
            <MainLink />
          </Route>
        </Switch>
    </Router>
  );
}