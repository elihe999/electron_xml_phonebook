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

class Phonebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.data = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ];
  };


  // const xml = builder.create('root')
  //   .ele('xmlbuilder')
  //   .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
  //   .end({ pretty: true });
  render() {
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
          
          </Col>
          <Col span={8} >
          
          </Col>
        </Row>
      </div>
    );
  }
};

export default Phonebook;