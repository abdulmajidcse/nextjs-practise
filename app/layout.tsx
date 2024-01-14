import "@/app/globals.css";
import Header from "@/components/header";
import FooterComponent from "@/components/footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mx-auto flex flex-wrap items-center justify-between container py-5">
          {children}
        </div>
        <FooterComponent />
      </body>
    </html>
  );
}
