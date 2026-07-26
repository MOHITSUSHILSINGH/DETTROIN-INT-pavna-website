import PageHeader from "../components/PageHeader.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import CampusLocations from "../components/CampusLocations.jsx";

export default function Admissions() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Begin your child's journey at Pavna."
        copy="Tell us a little about your family and preferred campus — our admissions team will take it from there."
      />

      <section className="container-page py-16 grid lg:grid-cols-[1fr,1.1fr] gap-12">
        <div>
          <p className="eyebrow">Register — Page 02</p>
          <h2 className="mt-2 font-display font-bold text-2xl md:text-3xl">Admission enquiry form</h2>
          <p className="mt-3 text-ink/70 max-w-md">
            Fields marked with <span className="text-oxblood">*</span> are required. We typically respond
            within two working  day.
          </p>
        </div>
        <div className="bg-chalk-soft border border-ink/10 rounded-sm p-6 md:p-8">
          <EnquiryForm />
        </div>
      </section>

      <CampusLocations />
      <FAQAccordion />
    </>
  );
}
