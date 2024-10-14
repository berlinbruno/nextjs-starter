import { Metadata } from 'next';
import { genPageMetadata } from '../seo';

export const metadata: Metadata = genPageMetadata({
  title: 'Offline',
  description: 'No Network',
});

export default function OfflinePage() {
  return (
    <main className="container mx-auto min-h-screen">
      <div className="flex h-screen items-center justify-center">
        <div className="flex items-baseline justify-center gap-2">
          <h1 className="h1">Offline</h1>
          <div className="flex gap-1">
            <span className="h-4 w-4 animate-pulse rounded-full bg-violet-600"></span>
            <span className="h-4 w-4 animate-pulse rounded-full bg-violet-600"></span>
            <span className="h-4 w-4 animate-pulse rounded-full bg-violet-600"></span>
          </div>
        </div>
      </div>
    </main>
  );
}
