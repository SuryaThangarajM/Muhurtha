import { footerColumns } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="section-shell section-space-tight grid gap-12 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-[clamp(1.55rem,2.4vw,2.2rem)] tracking-[0.16em] text-stone-950">muhurthadivineworks.com</p>
          <p className="fluid-body mt-5 max-w-md">
            Devoted craftsmanship designed to elevate the spiritual glory of our sacred deities.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="fluid-footer-title tracking-[0.3em] text-luxury-softGold">{column.title}</p>
            <ul className="mt-5 space-y-3 fluid-footer-link text-stone-600">
              {column.links.map((link) => {
                let href = '#';
                if (column.title === 'About') {
                  if (link === 'Our Story') href = '#about-us';
                  else if (link === 'Craftsmanship') href = '#craftsmanship';
                }

                return (
                  <li key={link}>
                    <a href={href} className="transition-colors hover:text-stone-950">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="section-shell border-t border-stone-200 py-5 text-center text-[clamp(0.65rem,0.78vw,0.74rem)] uppercase tracking-[0.28em] text-stone-400">
        © 2026 muhurthadivineworks.com. All rights reserved.
      </div>
    </footer>
  );
}