import siteData from '@/constants/data';
import { Metadata } from 'next';

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

export function genPageMetadata({
  title,
  description,
  image,
  ...rest
}: PageSEOProps): Metadata {
  return {
    title,
    description: description || siteData.DESCRIPTION,
    openGraph: {
      title: `${title} | ${siteData.APP_SHORT_NAME}`,
      description: description || siteData.DESCRIPTION,
      url: './',
      siteName: siteData.APP_NAME,
      images: image ? [image] : [siteData.OPENGRAPH],
      locale: siteData.LANG,
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteData.APP_SHORT_NAME}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteData.OPENGRAPH],
    },
    ...rest,
  };
}
