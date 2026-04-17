import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Ethics Charter", "Blog", "Careers"],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 mt-24">
    <div className="container pt-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Building the ethical internet, one connected thought at a time.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Monthly updates on ethical AI and product news.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex"
          >
            <input
              type="email"
              placeholder="you@domain.com"
              className="flex-1 min-w-0 bg-muted/60 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground rounded-l-md px-3 py-2 outline-none focus:border-primary/60"
            />
            <button className="rounded-r-md px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 btn-press">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Neurix Labs. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Security</a>
        </div>
      </div>
    </div>
  </footer>
);
