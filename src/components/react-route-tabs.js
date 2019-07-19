import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import ReactRouteTab from './react-route-tab';

const CLASS_NAME = 'react-route-tabs';
const TYPES = ['nav', 'link'];

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(TYPES),
    headerExtra: PropTypes.element,
    bodyExtra: PropTypes.element
  };

  static defaultProps = {
    type: 'nav'
  };
  /*===properties end===*/

  get items() {
    const { children } = this.props;
    return React.Children.map(children, (child) => child.props);
  }

  render() {
    const {
      className,
      headerExtra,
      bodyExtra,
      children,
      type,
      ...props
    } = this.props;
    const items = this.items;

    return (
      <section className={classNames(CLASS_NAME, className)} {...props}>
        <Router>
          <header className={classNames(`${CLASS_NAME}__header`)}>
            <nav>
              {items.map((item) => {
                const { title, ...itemProps } = item;
                const LinkComponent = type === 'nav' ? NavLink : Link;
                return (
                  <LinkComponent key={item.to} {...itemProps}>
                    {item.title}
                  </LinkComponent>
                );
              })}
            </nav>
            {headerExtra}
          </header>
          <div className={classNames(`${CLASS_NAME}__body`)}>
            {items.map((item) => {
              return (
                <Route
                  key={item.to}
                  path={item.to}
                  component={() => (
                    <ReactRouteTab
                      className={`${CLASS_NAME}__content`}
                      children={item.children}
                    />
                  )}
                />
              );
            })}
            {headerExtra}
          </div>
        </Router>
      </section>
    );
  }
}
