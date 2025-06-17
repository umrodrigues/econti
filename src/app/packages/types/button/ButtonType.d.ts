import type { ILink } from '../link/LinkType';

export interface IButton {
  link?: ILink | null;
  text?: string | null;
  variant?: 'primary' | 'secondary' | null;
  alt?: string | null;
  tracking?: string | null;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}
