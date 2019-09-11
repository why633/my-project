import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './component/nav/nav.js';
import HomePage from './component/homePage/homePage.js';
import Note from './component/note/note.js';
import Travel from './component/travel/travel.js';
import Others from './component/others/others.js';
function Root () {
  return (
    <Router>
      <div className="root">
        <Nav />
        <div className="width">
          <Route exact path="/" component={HomePage} />
          <Route path="/HomePage" component={HomePage} />
          <Route path="/Note" component={Note} />
          <Route path="/Travel" component={Travel} />
          <Route path="/Others" component={Others} />
        </div>
      </div>
    </Router>
  );
}

export default Root;
