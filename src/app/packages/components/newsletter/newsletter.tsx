'use client';

import dynamic from 'next/dynamic';
import { NewsletterProps } from './fragments/dynamic-newsletter';

// Dynamically load the newsletter, reducing bundle size on the client
const DynamicNewsletter = dynamic<NewsletterProps>(() => import('./fragments/dynamic-newsletter'), {
  ssr: false,
});

const Newsletter: React.FC<NewsletterProps> = ({ children }) => {
  return <DynamicNewsletter>{children}</DynamicNewsletter>;
};

export default Newsletter;
