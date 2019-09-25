import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './component/nav/nav.js';
import HomePage from './component/homePage/homePage.js';
import Note from './component/note/note.js';
import NoteDetails from './component/note/sub/noteDetails.js';
import Travel from './component/travel/travel.js';
import Others from './component/others/others.js';
import NotFound from './component/error/notFound.js';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
function Root () {
  return (
    <Router>
      <div className="root">
        <Layout className="layout">
          <Header><div className="logo" /><Nav /></Header>
          <Content style={{ padding: '0 50px' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/HomePage" component={HomePage} />
              <Route path="/Note" component={Note} />
              <Route path="/NoteDetails" component={NoteDetails} />
              <Route path="/Travel" component={Travel} />
              <Route path="/Others" component={Others} />
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </div>
    </Router >
  );
}

export default Root;
