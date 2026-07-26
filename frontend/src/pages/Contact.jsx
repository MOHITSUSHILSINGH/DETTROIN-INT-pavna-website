import PageHeader from "../components/PageHeader.jsx";
import ContactForm from "../components/ContactForm.jsx";
import CampusLocations from "../components/CampusLocations.jsx";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="We'd love to hear from you."
        copy="General questions, media enquiries, or feedback — send a message and our team will follow up."
      />

      <section className="container-page py-16 grid lg:grid-cols-[1fr,1.1fr] gap-12">
        <div>
          <p className="eyebrow">Register — Page 03</p>
          <h2 className="mt-2 font-display font-bold text-2xl md:text-3xl">Send a message</h2>
        </div>
        <div className="bg-chalk-soft border border-ink/10 rounded-sm p-6 md:p-8">
          <ContactForm />
        </div>
      </section>

      <CampusLocations />
    </>
  );
}
