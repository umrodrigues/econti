import clsx from 'clsx';
import { IBaseWrapper } from '@/app/packages/types/base/base-wrapper.type';
import styles from './BaseWrapper.module.scss';

const BaseWrapper = ({ title, caption, children, button, onButtonClick, navigate = false, className, container = true }: IBaseWrapper) => (
  <div className={clsx(styles.wrapper, className, container && 'container')}>
    {title && (
      <h2 className={clsx(styles.title, !container && 'container', !caption && styles.withoutCaption)} tabIndex={navigate ? 1 : undefined}>
        {title}
      </h2>
    )}
    {caption && (
      <p className={clsx(styles.caption, !container && 'container')} tabIndex={navigate ? 2 : undefined}>
        {caption}
      </p>
    )}
    {children}
    {!!(button?.text && button?.link?.href) && (
      <button onClick={onButtonClick} className={clsx(styles.button, !container && 'container')} {...button} />
    )}
  </div>
);

export { BaseWrapper };
