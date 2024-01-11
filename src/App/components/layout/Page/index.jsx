import React from 'react';
import styles from './Page.module.scss';

function Page({ children }) {
  return (
    <div className={styles.Page}>
      <div className={styles.Page__content}>{children}</div>
    </div>
  );
}

export default Page;
