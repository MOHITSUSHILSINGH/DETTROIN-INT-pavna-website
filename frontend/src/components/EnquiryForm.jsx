import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const initialState = {
  studentName: "",
  parentName: "",
  email: "",
  phone: "",
  gradeApplyingFor: "",
  campus: "Aligarh",
  boardingPreference: "Day Scholar",
  message: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch(`${API_BASE}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        const msg = data.errors?.[0]?.msg || data.message || "Something went wrong. Please try again.";
        setStatus({ state: "error", message: msg });
        return;
      }

      setStatus({ state: "success", message: "Enquiry received — our admissions team will contact you shortly." });
      setForm(initialState);
    } catch (err) {
      setStatus({
        state: "error",
        message: "Couldn't reach the server. Make sure the backend is running and try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5" aria-describedby="enquiry-status">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Student's name" name="studentName" value={form.studentName} onChange={handleChange} required />
        <Field label="Parent/guardian name" name="parentName" value={form.parentName} onChange={handleChange} required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} required />
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Grade applying for" name="gradeApplyingFor" value={form.gradeApplyingFor} onChange={handleChange} required />
        <Select label="Preferred campus" name="campus" value={form.campus} onChange={handleChange} options={["Aligarh", "Sasni", "Hathras"]} />
        <Select
          label="Boarding preference"
          name="boardingPreference"
          value={form.boardingPreference}
          onChange={handleChange}
          options={["Day Scholar", "Weekly Boarding", "Full Boarding"]}
        />
      </div>
      <label className="block">
        <span className="text-sm font-medium text-ink/80">Anything we should know? (optional)</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="mt-1.5 w-full rounded-sm border border-ink/20 bg-chalk px-4 py-3 focus:border-marigold outline-none"
        />
      </label>

      <button type="submit" disabled={status.state === "loading"} className="btn-primary justify-center disabled:opacity-60">
        {status.state === "loading" ? "Submitting…" : "Submit Enquiry"}
      </button>

      <div id="enquiry-status" role="status" aria-live="polite">
        {status.state === "success" && <p className="text-pine font-medium">{status.message}</p>}
        {status.state === "error" && <p className="text-oxblood font-medium">{status.message}</p>}
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink/80">
        {label} {required && <span className="text-oxblood">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1.5 w-full rounded-sm border border-ink/20 bg-chalk px-4 py-3 focus:border-marigold outline-none"
      />
    </label>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink/80">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1.5 w-full rounded-sm border border-ink/20 bg-chalk px-4 py-3 focus:border-marigold outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
