import siteData from '@/constants/data';
import { MetadataRoute } from 'next';

interface CustomManifest extends MetadataRoute.Manifest {
  screenshots?: {
    src: string;
    type?: string;
    sizes?: string;
    form_factor?: 'wide' | 'narrow'; // Custom field
  }[];
}

export default function manifest(): CustomManifest {
  return {
    name: siteData.APP_NAME,
    short_name: siteData.APP_SHORT_NAME,
    description: siteData.DESCRIPTION,
    categories: siteData.CATEGORIES,
    lang: siteData.LANG,
    orientation: 'any',
    dir: 'auto',
    id: '/',
    start_url: siteData.BASE_URL,
    theme_color: siteData.THEME_COLOR,
    background_color: siteData.BACKGROUND_COLOR,
    display: 'fullscreen',
    display_override: [
      'fullscreen',
      'standalone',
      'minimal-ui',
      'browser',
      'window-controls-overlay',
    ],
    screenshots: [
      {
        src: '/images/screenshots/430x932-mobile-small.png',
        type: 'image/png',
        sizes: '430x932',
      },
      {
        src: '/images/screenshots/1920x1080-desktop-wide.png',
        type: 'image/png',
        sizes: '1920x1080',
        form_factor: 'wide', // Using the custom form_factor
      },
    ],
    icons: [
      {
        src: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicons/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicons/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Documentation',
        short_name: 'Docs',
        description: 'Welcome to Next.js Starter',
        url: '/docs',
        icons: [
          {
            src: '/images/icons/welcome.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any',
          },
        ],
      },
    ],
  };
}
