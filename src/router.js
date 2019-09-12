import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './component/nav/nav.js';
import HomePage from './component/homePage/homePage.js';
import Note from './component/note/note.js';
import NoteDetails from './component/note/sub/noteDetails.js';
import Travel from './component/travel/travel.js';
import Others from './component/others/others.js';
import NotFound from './component/error/notFound.js';
function Root () {
  return (
    <Router>
      <div className="root">
        <Nav />
        <div className="left-wrap">
          一些文章
        </div>
        <div className="width">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/HomePage" component={HomePage} />
            <Route path="/Note" component={Note} />
            <Route path="/NoteDetails" component={NoteDetails} />
            <Route path="/Travel" component={Travel} />
            <Route path="/Others" component={Others} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default Root;
