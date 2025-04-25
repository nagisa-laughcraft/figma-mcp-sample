import { Button } from '@/components/Button';
import { NewsletterForm } from '@/components/NewsletterForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Basic セクション */}
      <section className="w-full bg-[#F5F5F5] py-40 px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[72px] font-bold leading-[1.2em] tracking-[-0.03em] text-center text-[#1E1E1E]">
              Title
            </h1>
            <p className="text-[32px] leading-[1.2em] text-center text-[#757575]">
              Subtitle
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Form と Button */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <NewsletterForm />
        <Button variant="danger">Button</Button>
      </div>
    </main>
  );
}