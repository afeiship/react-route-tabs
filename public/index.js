import { ReactRouteTabs, ReactRouteTab } from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ReactRouteTabs>
          <ReactRouteTab title="nav1" to="/nav1">
            Tab1 Content!
          </ReactRouteTab>
          <ReactRouteTab title="nav2" to="/nav2">
            Tab2 Content!
          </ReactRouteTab>
        </ReactRouteTabs>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
