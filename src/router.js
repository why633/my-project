import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './component/nav/nav.js';
import HomePage from './component/homePage/homePage.js';
import Note from './component/note/note.js';
import NoteDetails from './component/note/sub/noteDetails.js';
import Travel from './component/travel/travel.js';
import Others from './component/others/others.js';
import NotFound from './component/error/notFound.js';
import Breadcrumb from './component/breadcrumb/breadcrumb';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
function Root () {
  return (
    <Router>
      <div className="root">
        <Layout className="layout">
          <Header><div className="logo" /><Nav /></Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb />
            <div style={{ background: '#fff', minHeight: 'calc(100vh - 173px' }}>
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
          </Content>
          <Footer style={{ textAlign: 'center' }}>Copyright©2019 Created by WHY</Footer>
        </Layout>
      </div>
    </Router >
  );
}

export default Root;
