import React from 'react';
import { Layout } from 'antd';
import './index.css';

const { Content, Header } = Layout;

class Setting extends React.Component {

  render() {
    return (
      <Content style={{ margin: '0 16px' }}>
        <Header theme="light" className="site-layout-background" style={{ padding: 0 }}>
          111
        </Header>
        <div className="formCon">
          <h2>第一页</h2>
          <h2>第一页</h2>
          <h2>第一页</h2>
          <h2>第一页</h2>
        </div>
      </Content>
    );
  }
}

export default Setting;