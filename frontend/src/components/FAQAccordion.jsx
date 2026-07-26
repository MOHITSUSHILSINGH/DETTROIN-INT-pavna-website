import { useState } from "react";
import { faqs } from "../data/content.js";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="container-page py-20">
      <p className="eyebrow">Common questions</p>
      <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl max-w-2xl">
        Frequently asked questions.
      </h2>

      <div className="mt-10 max-w-3xl">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="ledger-divider">
              <h3>
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="font-display font-semibold text-lg">{item.q}</span>
                  <span className="text-marigold-dark text-2xl leading-none" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-ink/70 leading-relaxed">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
