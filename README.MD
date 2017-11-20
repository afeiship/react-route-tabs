# react-route-tabs
> React tabs with routes.


## usage:
```jsx
import ReactRouteTabs from 'react-route-tabs';

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

```

## props:
```js
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
```



## todos:
- [ ] onClick => onChange
- [ ] target.value -> (index,item) ?
