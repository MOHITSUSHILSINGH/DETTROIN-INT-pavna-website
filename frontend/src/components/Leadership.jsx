import { leadership } from "../data/content.js";

export default function Leadership() {
  return (
    <section className="container-page py-20">
      <p className="eyebrow">Board of management</p>
      <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl max-w-2xl">Leadership voices.</h2>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {leadership.map((l) => (
          <blockquote key={l.name} className="border-l-4 border-marigold pl-6 py-1">
            <p className="font-editorial italic text-lg text-ink/85 leading-relaxed">"{l.quote}"</p>
            <footer className="mt-4">
              <p className="font-display font-semibold">{l.name}</p>
              <p className="text-sm text-ink/60">{l.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
