import React from 'react';
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <div className={styles.NotFoundBlock}>
      <h1 className={styles.title}>
        Нічого не знайдено :(
      </h1>

      <p className={styles.description}>
        Нажаль ця сторінка відсутня в нашому інтернет-магазині
      </p>
    </div>
  );
};
