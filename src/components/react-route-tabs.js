import './style.scss';
import ReactLink from 'react-link';
import React,{PureComponent,PropTypes} from 'react';
import classNames from 'classnames';


export default class extends PureComponent {
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
    const {className, items, method, mapping} = this.props;
    return (
      <div className={classNames('react-route-tabs',className)}>
        {
          items.map((item,index)=>{
            return (
              <div key={index} className="react-route-item">
                <ReactLink method={method} href={`#/${item[mapping.route]}`}>{item[mapping.content]}</ReactLink>
              </div>
            )
          })
        }
      </div>
    );
  }
}
