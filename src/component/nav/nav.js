import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.scss'
const NavBar = () => (
  <div className="nav">
    <div className="width">
      <div className="logo"></div>
      <div className="nav-wrap">
        <NavLink exact to='/'></NavLink>
        <NavLink to='/HomePage' className="tab" activeClassName='active'>首页</NavLink>
        <NavLink to='/Note' className="tab" activeClassName='active'>笔记</NavLink>
        <NavLink to='/Travel' className="tab" activeClassName='active'>在路上</NavLink>
        <NavLink to='/Others' className="tab" activeClassName='active'>其他</NavLink>
      </div>
    </div>
  </div>
)

export default NavBar
