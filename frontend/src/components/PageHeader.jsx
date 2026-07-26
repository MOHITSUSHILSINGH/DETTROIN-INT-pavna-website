export default function PageHeader({ eyebrow, title, copy }) {
  return (
    <section className="bg-ink text-chalk py-16 md:py-20">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-2 font-display font-bold text-3xl md:text-5xl max-w-2xl leading-tight">{title}</h1>
        {copy && <p className="mt-5 text-chalk/75 max-w-2xl text-lg">{copy}</p>}
      </div>
    </section>
  );
}
