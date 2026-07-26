import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
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

      setStatus({ state: "success", message: "Thanks — your message has been sent. We'll respond within one business day." });
      setForm(initialState);
    } catch (err) {
      setStatus({
        state: "error",
        message: "Couldn't reach the server. Make sure the backend is running and try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 max-w-xl" aria-describedby="form-status">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone (optional)" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" />
        <Field label="Subject (optional)" name="subject" value={form.subject} onChange={handleChange} />
      </div>
      <label className="block">
        <span className="text-sm font-medium text-ink/80">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1.5 w-full rounded-sm border border-ink/20 bg-chalk px-4 py-3 focus:border-marigold outline-none"
        />
      </label>

      <button type="submit" disabled={status.state === "loading"} className="btn-primary justify-center disabled:opacity-60">
        {status.state === "loading" ? "Sending…" : "Send Message"}
      </button>

      <div id="form-status" role="status" aria-live="polite">
        {status.state === "success" && <p className="text-pine font-medium">{status.message}</p>}
        {status.state === "error" && <p className="text-oxblood font-medium">{status.message}</p>}
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required, autoComplete }) {
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
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-sm border border-ink/20 bg-chalk px-4 py-3 focus:border-marigold outline-none"
      />
    </label>
  );
}
