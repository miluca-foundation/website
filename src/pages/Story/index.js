import React, { Fragment } from 'react';
import { Row, Divider, Col } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { SEO, Floor } from 'components';

import styles from './index.module.less';

export default () => (
  <Floor id="story">
    <SEO title="Story" />
    {/* <Row className={styles.header} justify="start">
      <div className={styles.heart}>
        <HeartOutlined />
      </div>
    </Row> */}
    <Row gutter={16} justify="start" className={styles.header} align="middle">
      <Col className={styles.left}>
        <HeartFilled />
      </Col>
      <Col className={styles.center}>
        <HeartFilled />
      </Col>
      <Col className={styles.right}>
        <HeartFilled />
      </Col>
    </Row>
    <div>
      <div className={styles.title}>
        <FormattedMessage id="story.title" />
      </div>
    </div>
    <div className={styles.subtitle}>
      <FormattedMessage id="story.description" />
    </div>
  </Floor>
);
