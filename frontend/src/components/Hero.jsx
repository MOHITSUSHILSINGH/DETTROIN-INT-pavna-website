import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-ink text-chalk overflow-hidden">
      <div className="absolute inset-0 bg-ruled-lines opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="container-page relative grid md:grid-cols-[1.1fr,0.9fr] gap-10 py-20 md:py-28 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="stamp-badge">Admissions Open · 2026–27</span>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Nurturing future leaders through
            <span className="text-marigold"> holistic education.</span>
          </h1>
          <p className="mt-6 text-chalk/75 text-lg max-w-xl">
            CBSE education across day, weekly, and full boarding programs — three campuses,
            28+ years of legacy, and a faculty built for a rapidly evolving world.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/admissions" className="btn-primary">
              Begin Admission
            </Link>
            <Link to="/about" className="btn-secondary border-chalk/40 text-chalk hover:bg-chalk hover:text-ink">
              Our Story
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="border-2 border-marigold/40 rounded-sm p-6 bg-ink-light/60 backdrop-blur-sm">
            <p className="eyebrow">Register — Page 01</p>
            <ul className="mt-4 divide-y divide-chalk/10 font-editorial italic text-chalk/90">
              <li className="py-3 flex justify-between"><span>Campuses</span><span>3</span></li>
              <li className="py-3 flex justify-between"><span>Student : Teacher</span><span>1 : 12</span></li>
              <li className="py-3 flex justify-between"><span>Boarding Options</span><span>Day / Weekly / Full</span></li>
              <li className="py-3 flex justify-between"><span>Curriculum</span><span>CBSE</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
