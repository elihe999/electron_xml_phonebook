import React, { Component } from 'react';
import { Layout, LocaleProvider } from 'antd';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import Nav from './components/Nav';

import { MainRouter } from "./router/router";
import {Provider} from 'mobx-react';
import rootStore from './mobx/rootStore';
import DevTools from 'mobx-react-devtools';
import './index.css';

export default class App extends Component {

  render() {
    return (
      <Provider rootStore={rootStore}>
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
      </Provider>
    );
  }
}
