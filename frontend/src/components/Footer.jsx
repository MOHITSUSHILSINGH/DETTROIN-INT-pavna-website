import { Link } from "react-router-dom";
import { campuses } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="bg-ink text-chalk mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-display font-bold text-xl mb-3">
            Pavna <span className="text-marigold">School</span>
          </p>
          <p className="text-chalk/70 text-sm leading-relaxed">
            Nurturing future leaders through holistic, CBSE-aligned education across three campuses in
            Uttar Pradesh since 1998.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3 text-marigold">Explore</p>
          <ul className="space-y-2 text-sm text-chalk/80">
            <li><Link to="/about" className="hover:text-marigold">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-marigold">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-marigold">Admissions</Link></li>
            <li><Link to="/gallery" className="hover:text-marigold">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3 text-marigold">Campuses</p>
          <ul className="space-y-3 text-sm text-chalk/80">
            {campuses.map((c) => (
              <li key={c.name}>
                <p className="font-medium text-chalk">{c.name}</p>
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-chalk/70 hover:text-marigold">
                  {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3 text-marigold">Get in touch</p>
          <Link to="/contact" className="btn-secondary border-chalk/40 text-chalk hover:bg-chalk hover:text-ink text-sm">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="ledger-divider border-chalk/15">
        <p className="container-page py-5 text-xs text-chalk/50 text-center">
          © {new Date().getFullYear()} Pavna School. Redesign concept project — original content and
          purpose preserved, design and code independently rebuilt.
        </p>
      </div>
    </footer>
  );
}
