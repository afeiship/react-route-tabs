import React, { Component } from 'react';
import classNames from 'classnames';
const CLASS_NAME = 'react-route-tab';

export default class extends React.Component {
  render() {
    const { className, ...props } = this.props;
    return <div className={classNames(CLASS_NAME, className)} {...props} />;
  }
}