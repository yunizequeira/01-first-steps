import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Title",
  description: "SEO Descripion",
  keywords: ["seo", "nextjs", "test"],
};

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Home</span>
    </main>
  );
}
