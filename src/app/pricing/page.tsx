import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: " Pricing Descripion",
  keywords: ["princing", "prices", "..."],
};

const PricingPage = () => {
    return (
      <>
        <span className="text-7xl">Pricing Page</span>
      </>
    )
  }
  
  export default PricingPage;