import styles from './index.less';
import { Button } from 'antd';
import {useEffect} from 'react'
import { history, request } from 'umi';

export default function IndexPage() {
  useEffect(() => {
    // setTimeout(()=> {
    //   history.push('/user/one')
    // },2000)
  })

  const getData = () => {
    request('/api/index').then(res=> console.log(res))
  }
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={getData}>点我获取数据</Button>
    </div>
  );
}
