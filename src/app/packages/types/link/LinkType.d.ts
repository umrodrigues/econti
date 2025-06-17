import React from 'react';

export type ILinkTarget = '_blank' | '_self';


export interface ILink {
  name?: string | null;
  label?: string | null;
  target?: ILinkTarget;
  icon?: string | null;
  href: string;
  tracking?: string | null;
  forceHref?: boolean;
}
