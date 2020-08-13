import React from 'react';
import styles from './index.module.less';

export default ({ id, children, type = "primary" }) => (
  <div className={`${styles.container} ${styles[type]}`} id={id}>
    {children}
  </div>
);
