import React from 'react';
import { Menu, Input, Avatar, Dropdown, Button } from 'antd';
import './index.less';

const NavBar: React.FC = () => (
  <div className='nav-container'>
    {/* Logo/网站名 */}
    <div className='nav-logo'>
      Minos Blog
    </div>
    {/* 菜单 */}
    <Menu mode="horizontal" className='nav-menu'>
      <Menu.Item key="home">首页</Menu.Item>
      <Menu.Item key="categories">分类</Menu.Item>
      <Menu.Item key="tags">标签</Menu.Item>
      <Menu.Item key="archive">归档</Menu.Item>
      <Menu.Item key="about">关于我</Menu.Item>
    </Menu>
    {/* 搜索框 */}
    <Input.Search placeholder="搜索..." className='nav-search' />
  </div>
);

export default NavBar;