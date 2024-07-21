import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Descripion",
  keywords: ["about us", "information", "..."],
};

const AboutPage = () => {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  )
}

export default AboutPage
