import { motion } from "framer-motion";
import { legacyLedger } from "../data/content.js";

export default function LegacyLedger() {
  return (
    <section className="bg-ink text-chalk py-20">
      <div className="container-page">
        <p className="eyebrow">The Legacy Ledger</p>
        <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl max-w-2xl">
          Twenty-eight years, entered line by line.
        </h2>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[720px] border border-chalk/15 rounded-sm">
            {legacyLedger.map((row, i) => (
              <motion.div
                key={row.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`grid grid-cols-[110px,1fr] items-center px-6 py-5 ${
                  i !== legacyLedger.length - 1 ? "border-b border-chalk/10" : ""
                }`}
              >
                <span className="font-display font-bold text-marigold text-lg">{row.year}</span>
                <p className="font-editorial italic text-chalk/85">{row.entry}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-chalk/40">Scroll horizontally on smaller screens to view the full register.</p>
      </div>
    </section>
  );
}
