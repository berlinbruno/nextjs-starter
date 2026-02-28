export default function LoadingPage() {
  return (
    <main className="container mx-auto min-h-screen">
      <article className="flex h-screen items-center justify-center">
        <header className="flex flex-col items-center gap-4">
          <div className="flex items-baseline justify-center gap-2">
            <h1>Loading</h1>
            <div className="flex gap-1" role="status" aria-label="Loading">
              <span className="h-4 w-4 animate-pulse rounded-full bg-violet-600"></span>
              <span className="h-4 w-4 animate-pulse rounded-full bg-violet-600"></span>
              <span className="h-4 w-4 animate-pulse rounded-full bg-violet-600"></span>
            </div>
          </div>
        </header>
      </article>
    </main>
  );
}
