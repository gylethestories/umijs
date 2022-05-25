import React from 'react'
import { Link, NavLink } from 'umi'
import  './index.less';

export default function index(props:any) {
  return (
    <div>
        <h2>Header</h2>
        {/* <Link to="/user/one">用户1</Link>
        <Link to="/user/two">用户1</Link> */}

        <NavLink  to="/user/one">用户1</NavLink>
        <NavLink  to="/user/two">用户1</NavLink>
        <hr />
        {props.children}
        <h2>Footer</h2>
    </div>
  )
}
