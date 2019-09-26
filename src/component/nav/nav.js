import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import './nav.scss'
const NavBar = () => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['1']}
    style={{ lineHeight: '64px' }}
  >
    <Menu.Item key="1"><NavLink to='/HomePage' className="tab" activeClassName='active'>首页</NavLink></Menu.Item>
    <Menu.Item key="2"><NavLink to='/Note' className="tab" activeClassName='active'>笔记</NavLink></Menu.Item>
    <Menu.Item key="3"><NavLink to='/Travel' className="tab" activeClassName='active'>在路上</NavLink></Menu.Item>
    <Menu.Item key="4"><NavLink to='/Others' className="tab" activeClassName='active'>其他</NavLink></Menu.Item>
  </Menu>
)

export default NavBar