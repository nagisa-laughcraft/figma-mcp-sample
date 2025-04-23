import { Button } from '../components/Button/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-2xl font-bold">
        Welcome to Next.js
      </h1>
      <Button>Button</Button>
    </main>
  );
}