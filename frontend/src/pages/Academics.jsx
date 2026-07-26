import PageHeader from "../components/PageHeader.jsx";
import ProgramsGrid from "../components/ProgramsGrid.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";

export default function Academics() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Curriculum built for concept, not just content."
        copy="A CBSE foundation extended through AI & Robotics, SEEL learning, and co-curricular programs that develop the whole student."
      />
      <ProgramsGrid />
      <FAQAccordion />
    </>
  );
}
