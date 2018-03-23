import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Journal from "./pages/Journal";
import Note from "./pages/Note";
import Write from "./pages/Write";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Journal} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/journal/:id" component={Note} />
        <Route exact path="/write" component={Write} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
