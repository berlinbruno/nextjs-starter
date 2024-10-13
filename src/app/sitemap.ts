import siteData from '@/constants/data';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl: string = siteData.BASE_URL;
  const routes: string[] = siteData.ROUTES;

  const siteRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...siteRoutes];
}
