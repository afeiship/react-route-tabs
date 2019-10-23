# react-route-tabs
> React tabs with routes.

## install
```shell
npm install -S afeiship/react-route-tabs
```

## usage
1. import css
  ```scss
  @import "~react-route-tabs/style.scss";

  // customize your styles:
  $react-route-tabs-options: ()
  ```
2. import js
  ```js
  import { ReactRouteTabs, ReactRouteTab } from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <div className="app-container">
          <ReactRouteTabs>
            <ReactRouteTab title="nav1" replace to="/nav1">
              Tab1 Content!
            </ReactRouteTab>
            <ReactRouteTab title="nav2" replace to="/nav2">
              Tab2 Content!
            </ReactRouteTab>
          </ReactRouteTabs>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-route-tabs/
