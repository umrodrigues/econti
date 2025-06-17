import type { PropsWithChildren } from 'react';
import React from 'react';
import { IButton } from '../button/ButtonType';

export interface IBaseWrapper extends PropsWithChildren {
  title?: string | null;
  caption?: string | null;
  button?: IButton | null;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  navigate?: boolean;
  className?: string;
  container?: boolean;
}
