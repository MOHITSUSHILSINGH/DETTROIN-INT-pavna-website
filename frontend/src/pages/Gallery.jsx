import PageHeader from "../components/PageHeader.jsx";

const categories = [
  { name: "Sports & Athletics", copy: "Building character on the field.", hue: "from-oxblood/80 to-ink" },
  { name: "Music & Arts", copy: "Fostering creativity across mediums.", hue: "from-marigold/70 to-ink" },
  { name: "Literature & Writing", copy: "Enhancing communication and voice.", hue: "from-pine/70 to-ink" },
  { name: "AI & Robotics Lab", copy: "Encouraging real-world innovation.", hue: "from-ink-light to-ink" },
  { name: "Boarding Life", copy: "A home away from home.", hue: "from-oxblood/60 to-ink-dark" },
  { name: "Campus Grounds", copy: "Three campuses, one community.", hue: "from-marigold/50 to-ink-dark" },
];

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Life at Pavna Learning"
        title="A look at campus life."
        copy="Photography placeholders below are ready to be swapped for real campus photography — grid, aspect ratios, and lazy-loading are already wired up."
      />
      <section className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <figure
            key={c.name}
            className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-ink"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${c.hue} transition-transform duration-500 group-hover:scale-105`}
              aria-hidden="true"
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end p-5 text-chalk">
              <p className="font-display font-semibold text-lg">{c.name}</p>
              <p className="text-sm text-chalk/75">{c.copy}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
