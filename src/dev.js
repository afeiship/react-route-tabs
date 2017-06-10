import './dev.scss';

import ReactRouteTabs from './main';

class App extends React.Component{
  _onClick(a,b){
    console.log('this',a,b)
  }

  render(){
    const items = [
      {
        route: 'bidding',
        content: '竞拍中'
      },
      {
        route: 'success',
        content: '已成交'
      },
      {
        route: 'leave',
        content: '已流拍'
      },
      {
        route: 'failed',
        content: '失败'
      },
      {
        route: 'draft',
        content: '草稿箱',
        method: 'other',
        onClick: function(){
          console.log('other...')
        }
      }
    ];
    return (
      <div className="hello-react-route-tabs">
        <ReactRouteTabs method='replace' items={items} />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
