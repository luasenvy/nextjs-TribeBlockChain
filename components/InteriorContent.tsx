export default function InteriorContent({ children }: React.PropsWithChildren) {
  return (
    <section className="py-32 bg-zinc-900/30 backdrop-blur-sm">
      <div className="container">{children}</div>
    </section>
  );
}
