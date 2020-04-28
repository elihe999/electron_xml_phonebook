import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  PieChartOutlined,
} from '@ant-design/icons';
import './index.css';

const { Sider } = Layout;
// const { SubMenu } = Menu;





class Nav extends Component {

  constructor(props) {
    super(props);
    const hash = window.location.hash.split('/')[1];
    this.state = {
      current: hash ? hash : 'Home',
      collapsed: false, };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div style={{ width: 220, height: '100%', zIndex: 999 }}>
        <Sider
            collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="Home">
              <PieChartOutlined />
              <span>主页</span>
              <Link to='/Home'></Link>
            </Menu.Item>
            <Menu.Item key="Phonebook">
              <PieChartOutlined />
              <span>电话本</span>
              <Link to='/Phonebook'></Link>
            </Menu.Item><Menu.Item key="Setting">
              <PieChartOutlined />
              <span>设置</span>
              <Link to='/Setting'></Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default Nav;