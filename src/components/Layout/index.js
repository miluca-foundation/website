import { Layout as AntLayout, Menu } from 'antd';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl';

import styles from './index.module.less';

const { Header, Footer, Content } = AntLayout;

const Layout = ({ defKey, children }) => {
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
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: 'margin 0', float: 'left' }}>
            <Link to="/">
              <FormattedMessage id="title" />
            </Link>
          </h1>
          <Menu
            style={{ float: 'right' }}
            mode="horizontal"
            defaultSelectedKeys={defKey}
          >
            {/* <Menu.Item key="2">
              <Link to="/404/">Secret page</Link>
            </Menu.Item> */}
          </Menu>
        </div>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Fundación Miluca © 2020</Footer>
    </AntLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
