import { Hammer } from "lucide-react";
import { APP_NAME } from "@forgekit/shared";

export function App() {
  return (
    <div className="min-h-screen bg-surface text-primary flex flex-col">
      <header className="border-b border-border px-6 py-4 flex items-center gap-3">
        <Hammer className="h-6 w-6 text-accent" />
        <h1 className="text-lg font-semibold">{APP_NAME}</h1>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10">
            <Hammer className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold">Ready to build</h2>
          <p className="text-secondary">
            Your ForgeKit project is running. Edit{" "}
            <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded">
              apps/web/src/App.tsx
            </code>{" "}
            to get started.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="/api/health"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors"
            >
              API Health
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-3 text-center text-xs text-tertiary">
        Built with ForgeKit
      </footer>
    </div>
  );
}
