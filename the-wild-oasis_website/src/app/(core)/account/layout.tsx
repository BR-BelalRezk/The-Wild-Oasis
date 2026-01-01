import Aside from "@/components/layout/aside";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid grid-cols-[16rem_1fr] h-full gap-12 pt-40">
      <Aside />
      <div>{children}</div>
    </section>
  );
}
