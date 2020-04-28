import React from 'react';
import {
  Row,
  Col,
  List,
  Button,
} from 'antd';

// import {
//   MailOutlined,
//   CalendarOutlined
// } from '@ant-design/icons';

import Header from '../../components/Header';
import './index.css'

var builder = require('xmlbuilder');

const Phonebook = () => {

  const xml = builder.create('root')
    .ele('xmlbuilder')
    .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
    .end({ pretty: true });

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  
  return (
    <div>
      <Header />
      <Row>
        <Col span={10} >
          <nav class="itemlist">
            <ul>
              <li><a >Home</a></li>
              <li><a >About</a></li>
              <li><a >Work</a></li>
              <li><a >Contact</a></li>
            </ul>
          </nav>
        </Col>
        <Col span={6} >
          <p>{xml}</p>
        </Col>
        <Col span={8} >
          <p>{xml}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Phonebook;