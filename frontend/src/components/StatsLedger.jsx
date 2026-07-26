import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data/content.js";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl md:text-5xl text-ink">
      {display.toLocaleString()}
      <span className="text-marigold-dark">{suffix}</span>
    </span>
  );
}

export default function StatsLedger() {
  return (
    <section className="bg-chalk-soft ledger-divider">
      <div className="container-page py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-ink/60 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
