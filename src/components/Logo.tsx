export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2.5 group ${className}`}>
    <span className="grid place-items-center h-8 w-8 rounded-lg border border-border bg-card relative overflow-hidden">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" strokeWidth={1.75} stroke="currentColor">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="4" cy="6" r="1.5" />
        <circle cx="20" cy="6" r="1.5" />
        <circle cx="4" cy="18" r="1.5" />
        <circle cx="20" cy="18" r="1.5" />
        <path d="M5.2 6.8 L10.5 11.3 M18.8 6.8 L13.5 11.3 M5.2 17.2 L10.5 12.7 M18.8 17.2 L13.5 12.7" />
      </svg>
    </span>
    <span className="font-display font-semibold text-[20px] leading-none text-foreground tracking-tight">
      Neurix
    </span>
  </a>
);
