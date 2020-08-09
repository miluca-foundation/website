import React from 'react';
import { Layout, SEO } from '../components';
import { Row, Col } from 'antd';
import { Home } from '../components/Image';

import styles from './index.module.less';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.container}>
      <Row gutter={64} style={{ height: '100%' }}>
        <Col span={12}>
          <Home className={styles.image} />
        </Col>
        <Col span={12}>
          <Row align="middle" style={{ height: '100%' }}>
            <Col className={styles.title} span={24}>
              We <span className={styles.highlight}>care</span> about{' '}
              <span className={styles.details}>animals</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default IndexPage;
