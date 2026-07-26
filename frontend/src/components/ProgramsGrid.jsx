import { motion } from "framer-motion";
import { programs } from "../data/content.js";

export default function ProgramsGrid() {
  return (
    <section className="container-page py-20">
      <p className="eyebrow">What students experience</p>
      <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl max-w-2xl">
        Global-standard learning, built for real classrooms.
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
        {programs.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="bg-chalk p-7 hover:bg-chalk-soft transition-colors"
          >
            <span className="font-editorial italic text-marigold-dark text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display font-semibold text-xl">{p.title}</h3>
            <p className="mt-2 text-ink/70 text-[15px] leading-relaxed">{p.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
