export default function DedicatoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen">
      <div className="grid justify-center items-center h-full">{children}</div>
    </section>
  );
}
