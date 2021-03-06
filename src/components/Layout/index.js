import { Layout as AntLayout, Menu, Row, Col } from 'antd';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  injectIntl,
  FormattedMessage,
  Link,
  changeLocale,
} from 'gatsby-plugin-intl';
import { Logo } from 'components/Image';
import { GlobalOutlined } from '@ant-design/icons';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {
  HeartOutlined,
  CommentOutlined,
  FormOutlined,
} from '@ant-design/icons';

import styles from './index.module.less';

const { Header, Footer, Content } = AntLayout;
const { SubMenu } = Menu;
const { Item } = Menu;

const keys = [
  {
    id: 'story',
    icon: <HeartOutlined />,
  },
  {
    id: 'testimonies',
    icon: <CommentOutlined />,
  },
  {
    id: 'contact',
    icon: <FormOutlined />,
  },
];

const handleMenuClick = ({ key }) => {
  if (key === 'en' || key === 'es') {
    changeLocale(key);
  } else {
    scrollTo(`#${key}`);
  }
};

const Layout = ({ defKey, children, intl }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <AntLayout className={styles.layout}>
      <Header>
        <div className={styles.header}>
          <h1 style={{ margin: 'margin 0', float: 'left' }}>
            <Link to="/">
              <Row gutter={16} align="middle">
                <Col>
                  <Logo className={styles.logo} />
                </Col>
                <Col>
                  <FormattedMessage id="title" />
                </Col>
              </Row>
            </Link>
          </h1>
          <Menu
            style={{ float: 'right' }}
            mode="horizontal"
            defaultSelectedKeys={defKey}
            onClick={handleMenuClick}
          >
            {keys.map(({ id, icon }) => (
              <Item key={id} icon={icon}>
                <FormattedMessage id={`menu.${id}`} />
              </Item>
            ))}
            <SubMenu icon={<GlobalOutlined />}>
              <Item key="en">English</Item>
              <Item key="es">Español</Item>
            </SubMenu>
            {/* <Menu.Item key="2">
              <Link to="/404/">Secret page</Link>
            </Menu.Item> */}
          </Menu>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: 'center' }} className={styles.footer}>
        {intl.formatMessage({ id: 'title' })} © 2020
        <div>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Footer>
    </AntLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
