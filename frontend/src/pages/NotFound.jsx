import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-2 font-display font-bold text-4xl">This page hasn't been entered in the register.</h1>
      <Link to="/" className="btn-primary mt-8 inline-flex">Back to Home</Link>
    </section>
  );
}
