import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

type BreadcrumbProps = {
  items: {
    label: string;
    href?: string;
  }[];
};

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index} className={index === items.length - 1 ? styles.active : ''}>
            {item.href ? (
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className={styles.separator}> &gt; </span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};
