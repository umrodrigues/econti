
import React from 'react';
import Image from 'next/image';
import { IHeaderLogo } from '@/app/packages/types/header/HeaderLogo';


// TODO - redicionar para a home ao clicar
export const HeaderLogo = ({src, width, height, alt, className}: IHeaderLogo) => {
  return (
      <Image src={src} alt={alt} width={width} height={height} className={className} />
  );
};

