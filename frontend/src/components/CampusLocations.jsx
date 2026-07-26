import { campuses } from "../data/content.js";

export default function CampusLocations() {
  return (
    <section className="bg-chalk-soft py-20">
      <div className="container-page">
        <p className="eyebrow">Where we are</p>
        <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl max-w-2xl">Our campuses.</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {campuses.map((c) => (
            <div key={c.name} className="bg-chalk border border-ink/10 rounded-sm p-6 flex flex-col">
              <h3 className="font-display font-semibold text-lg">{c.name}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed flex-1">{c.address}</p>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="mt-4 text-marigold-dark font-medium">
                {c.phone}
              </a>
              <a
                href={`https://www.google.com/maps?q=${c.mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-sm underline underline-offset-4 hover:text-oxblood"
              >
                Get directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
