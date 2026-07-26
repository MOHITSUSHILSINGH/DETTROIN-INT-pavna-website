import { distinguishedGuests } from "../data/content.js";

export default function GuestsHonorRoll() {
  return (
    <section className="container-page py-20">
      <p className="eyebrow">Honor roll</p>
      <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl max-w-2xl">
        Distinguished guests who've visited our campus.
      </h2>

      <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
        {distinguishedGuests.map((g) => (
          <li key={g.name} className="ledger-divider pt-4">
            <p className="font-display font-semibold">{g.name}</p>
            <p className="text-sm text-ink/60">{g.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
