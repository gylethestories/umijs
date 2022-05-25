// 1.创建UI组件
// 2.创建 model
// 3. 将ui组件和model 进行链接
import React from 'react';
import { connect } from 'umi';
import { Button } from 'antd';

const Dva = (props) => {
  const { dispatch } = props;
  const { tagsList } = props.tags;
  const list = props.tags.tagsList.list || [];

  const getData = () => {
    // 使用model,获取数据
    dispatch({
      type: 'tags/fetchTags', // model 的命令空间 / 方法
      payload: null,
    });
  };
  return (
    <div>
      <h3>Dva的使用</h3>
      <Button onClick={getData}>点击获取Dva数据</Button>
      {list.map((item: any, index: number) => {
        return <p key={index}>{item.name}</p>;
      })}
    </div>
  );
};
export default connect(({ tags }) => ({ tags }))(Dva);
