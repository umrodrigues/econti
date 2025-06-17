'use client';
import React from 'react';
import { headerMenuMock } from '../../shared/__mocks__/header-menu-mock';
import styles from './HeaderMenu.module.scss';

export const HeaderMenuGroup = () => {
  return (
    <nav className={styles.headerMenuGroup}>
      {headerMenuMock.links.map((linkGroup, index) => (
        <div key={index} className={styles.menuGroup}>
          <h3 className={styles.menuTitle}>{linkGroup.title}</h3>
          <ul className={styles.menuList}>
            {linkGroup.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.menuItem}>
                <a href={item.url} className={styles.menuLink}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
