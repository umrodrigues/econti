import React from 'react';
import styles from './Grid.module.scss';

interface GridItem {
  id: number;
  content: string;
}

interface GridProps {
  items: GridItem[];
}

export const Grid: React.FC<GridProps> = ({ items }) => {
  return (
    <div className={styles.gridContainer}>
      {items.map(item => (
        <div key={item.id} className={styles.gridItem}>
          {item.content}
        </div>
      ))}
    </div>
  );
};