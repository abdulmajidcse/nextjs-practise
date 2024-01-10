export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <p>Navbar here...</p>
      </nav>
      <main>{children}</main>
    </section>
  );
}
