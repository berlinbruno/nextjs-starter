import siteData from '@/constants/data';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl: string = siteData.BASE_URL;

  const rules = {
    userAgent: siteData.ROBOTS.USER_AGENTS,
    allow: siteData.ROBOTS.ALLOW_ROUTES,
    disallow: siteData.ROBOTS.DISALLOW_ROUTES,
  };
  return {
    rules,
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
