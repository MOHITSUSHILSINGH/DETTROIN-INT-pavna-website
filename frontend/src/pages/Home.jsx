import Hero from "../components/Hero.jsx";
import StatsLedger from "../components/StatsLedger.jsx";
import ProgramsGrid from "../components/ProgramsGrid.jsx";
import LegacyLedger from "../components/LegacyLedger.jsx";
import Leadership from "../components/Leadership.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsLedger />
      <ProgramsGrid />
      <LegacyLedger />
      <Leadership />
      <FAQAccordion />
      <section className="bg-oxblood text-chalk py-16">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl max-w-lg">
            Step into a real world of limitless possibilities where you can explore new ideas.
          </h2>
          <Link to="/admissions" className="btn-primary bg-marigold text-ink hover:bg-marigold-dark">
            Start Your Application
          </Link>
        </div>
      </section>
    </>
  );
}
