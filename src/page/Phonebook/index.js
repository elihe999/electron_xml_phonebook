import React from 'react';
import {
  Row,
  Col,
  List,
  Button,
  Card,
  Form,
  FormItem,
  formItemLayout,
  Input,
  Radio,
  RadioGroup,
  Tooltip,
  Checkbox
} from 'antd';

import Tree from './Tree';

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
          <Col span={6} >
          <List>
            <Tree />
          </List>
          </Col>
          <Col span={8} >
            <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={10} >
            
          </Col>
        </Row>
      </div>
    );
  }
};

export default Phonebook;