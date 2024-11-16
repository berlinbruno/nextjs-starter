const siteData = {
  // TODO: change APP_NAME, APP_SHORT_NAME, TITLE etc
  APP_NAME: 'Next js starter',
  APP_SHORT_NAME: 'Nextjs starter',
  TITLE: 'Next js starter',
  DESCRIPTION:
    'A TypeScript starter for Next.js that includes all you need to build amazing projects',
  AUTHORS: [
    {
      URL: 'your-example.com',
      NAME: 'your-name',
    },
  ],
  KEYWORDS: ['nextjs'],
  CATEGORIES: [''],
  OPENGRAPH: '/images/opengraph/opengraph.jpeg',
  BASE_URL:
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'http://localhost:4000'),
  LANG: 'en-US',
  DEFAULT_THEME: 'dark',
  THEME_COLOR: '#FFFFFF',
  THEME_COLOR_LIGHT: '#FFFFFF',
  THEME_COLOR_DARK: '#FFFFFF',
  BACKGROUND_COLOR: '#FFFFFF',
  ROUTES: [''],
  ROBOTS: {
    USER_AGENTS: '*',
    ALLOW_ROUTES: ['/'],
    DISALLOW_ROUTES: [], // add protected routes ['/admin', '/payment/*']
  },
};

export default siteData;
