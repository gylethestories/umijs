
import {Button} from 'antd'
export default function IndexPage(props:any) {
  
    return (
      <div>
        <h1>User page 1</h1>
        <Button onClick={() => {props.history.push('/')}}>点我回首页</Button>
      </div>
    );
  }
  