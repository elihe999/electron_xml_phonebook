import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';

import './index.css';

const { Header } = Layout;



class HeaderComponent extends Component {
  render() {
    return (
      <Header className='header' >
        <Menu theme="dark" mode="horizontal">
          <Button type="primary" size='large'>
            Primary
          </Button>
          <Button type="primary" size='large'>
            Primary
          </Button>
        </Menu>
      </Header>
    );
  }
}

export default HeaderComponent;