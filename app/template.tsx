export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Root Template</h2>
      {children}
    </div>
  );
}
