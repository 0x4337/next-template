import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
        NEXT TEMPLATE
      </h1>
      <p className="text-muted-foreground mt-2">Made with Next.js, Tailwind, Jotai, Tanstack Query, and ShadCN</p>
    </main>
  );
}
