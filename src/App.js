import React, { Component } from 'react';
import { Layout, LocaleProvider } from 'antd';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// import Header from './components/Header';
import Nav from './components/Nav';
import { MainRouter } from "./router";
import './index.css';

export default class App extends Component {

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Layout className="container">
          <Layout>
            <Nav />
            <Layout className="bodyContainer"  style={{ padding: '0 24px 24px' }}>
             <MainRouter />
            </Layout>
          </Layout>
        </Layout>
      </LocaleProvider>
    );
  }
}
