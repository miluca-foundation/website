import React, { Fragment } from 'react';
import { SEO, Floor } from 'components';
import { Row, Col, Button } from 'antd';
import { Home } from 'components/Image';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { DownCircleOutlined } from '@ant-design/icons';

import styles from './index.module.less';

export default () => {
  const intl = useIntl();
  return (
    <Fragment>
      <SEO title="Home" />
      <Floor id="home">
        <Row gutter={32} style={{ height: '100%', width: '100%' }}>
          <Col span={12}>
            <Row align="middle" style={{ height: '100%' }}>
              <Col className={styles.title} span={24}>
                <Row>
                  <FormattedMessage
                    id="home.description"
                    values={{
                      care: (
                        <span className={styles.highlight}>
                          <FormattedMessage id="care" />
                        </span>
                      ),
                      animals: (
                        <span className={styles.details}>
                          <FormattedMessage id="animals" />
                        </span>
                      ),
                    }}
                  />
                </Row>
                <Row>
                  <Button
                    onClick={() => scrollTo('#contact')}
                    icon={<DownCircleOutlined />}
                    shape="round"
                    size="large"
                    type="primary"
                  >
                    {intl.formatMessage({ id: 'home.i.want.to.know.more' })}
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={12} className={styles.hexagons}>
            <Home className={styles.image} />
          </Col>
        </Row>
      </Floor>
    </Fragment>
  );
};
