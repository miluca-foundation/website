import React from 'react';
import { Form, Row, Col, Input, Button, Card } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  MessageOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { SEO } from 'components';

import styles from './index.module.less';
import { useIntl } from 'gatsby-plugin-intl';

const { Item } = Form;
const { TextArea } = Input;

export default () => {
  const intl = useIntl();
  return (
    <div id="contact" className={styles.contact}>
      <SEO title="Contact" />
      <Row gutter={32}>
        <Col span={16}>
          <Card>
            <Form name="contact" layout="vertical">
              <Row>
                <Col span={24}>
                  <Item
                    label={intl.formatMessage({ id: 'contact.labels.name' })}
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: intl.formatMessage({
                          id: 'contact.validations.name.required',
                        }),
                      },
                    ]}
                  >
                    <Input
                      allowClear
                      prefix={<UserOutlined />}
                      placeholder={intl.formatMessage({
                        id: 'contact.placeholders.name',
                      })}
                    />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Item
                    label={intl.formatMessage({ id: 'contact.labels.email' })}
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: intl.formatMessage({
                          id: 'contact.validations.email.required',
                        }),
                        type: 'email',
                      },
                    ]}
                  >
                    <Input
                      allowClear
                      prefix={<MailOutlined />}
                      placeholder={intl.formatMessage({
                        id: 'contact.placeholders.email',
                      })}
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item
                    label={intl.formatMessage({
                      id: 'contact.labels.phone.number',
                    })}
                    name="phone"
                  >
                    <Input
                      allowClear
                      prefix={<PhoneOutlined />}
                      placeholder={intl.formatMessage({
                        id: 'contact.placeholders.phone.number',
                      })}
                    />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Item
                    label={intl.formatMessage({ id: 'contact.labels.message' })}
                    name="message"
                  >
                    <TextArea
                      prefix={<MessageOutlined />}
                      rows={8}
                      allowClear
                      placeholder={intl.formatMessage({
                        id: 'contact.placeholders.message',
                      })}
                    />
                  </Item>
                </Col>
              </Row>
              <Row justify="end">
                <Col span={8}>
                  <Item>
                    <Button
                      icon={<SendOutlined />}
                      type="primary"
                      htmlType="submit"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      {intl.formatMessage({ id: 'contact.send' })}
                    </Button>
                  </Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={8}>Hello :)</Col>
      </Row>
    </div>
  );
};
