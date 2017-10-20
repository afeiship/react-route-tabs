import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import ReactLink from 'react-link';
import classNames from 'classnames';
import noop from 'noop';

export default class extends React.Component {
  static propTypes = {
    className:PropTypes.string,
    method:PropTypes.string,
    items:PropTypes.array,
    mapping:PropTypes.object
  };

  static defaultProps = {
    className:'',
    method: 'replace',
    items: [],
    mapping:{
      route:'route',
      content:'content'
    }
  };

  render() {
    const {className, items, method, mapping,onClick, ...props} = this.props;
    return (
      <div className={classNames('react-route-tabs',className)} {...props}>
        {
          items.map((item,index)=>{
            return (
              <div key={index} className="react-route-item">
                <ReactLink method={item.method || method} onClick={item.onClick || onClick} href={`#/${item[mapping.route]}`}>{item[mapping.content]}</ReactLink>
              </div>
            )
          })
        }
      </div>
    );
  }
}
