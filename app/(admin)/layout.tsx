import "@/app/globals.css";
import AdminHeader from "@/components/admin/header";

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
        <AdminHeader />
        {children}
      </body>
    </html>
  );
}