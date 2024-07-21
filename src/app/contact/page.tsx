import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Descripion",
  keywords: ["contact", "information", "..."],
};
const ContactPage = () => {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}

export default ContactPage;
