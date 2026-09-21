import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Global Relief Consult - Global Relief Consult",
  description:
    "An international brand that trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E and specializes in Empowerment Training Programmes, Leadership Trainings, Skills Acquisition, Capacity Building and Content Development.",
  icons: {
    icon: "/images/LOGOO.png",
  },
  openGraph: {
    title: "Global Relief Consult - Global Relief Consult",
    description:
      "An international brand that trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E.",
    images: ["/images/Education-Schoogalleryl-2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
