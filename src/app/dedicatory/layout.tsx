import { Metadata } from "next";

export const metadata: Metadata = {
  title: "To my bunny",
  description: "Un pequeño regalo por el 21 de septiembre para mi conejita.",
  icons: "/imgs/girasol.ico",
};

export default function DedicatoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen bg-sky-100">
      <div className="grid justify-center items-center h-full px-5">
        {children}
      </div>
    </section>
  );
}
