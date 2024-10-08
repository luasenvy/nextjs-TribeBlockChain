import { Hexagon } from "./Hexagon";

export default function InteriorHero({ children }: React.PropsWithChildren) {
  return (
    <section className="py-60 relative overflow-x-clip">
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <Hexagon size={800} duration={30} />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <Hexagon size={1200} duration={50} reverse />
      </div>
      <div className="container">{children}</div>
    </section>
  );
}
