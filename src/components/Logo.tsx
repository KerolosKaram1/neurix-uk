import logoSrc from "@/assets/neurix-logo.png";

export const Logo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const h = size === "lg" ? "h-12" : size === "sm" ? "h-7" : "h-9";
  return (
    <a href="#top" className={`inline-flex items-center group ${className}`} aria-label="Neurix — Home">
      <span className={`logo-chip inline-flex items-center justify-center px-3 py-1.5 rounded-xl shadow-soft`}>
        <img
          src={logoSrc}
          alt="Neurix"
          className={`${h} w-auto select-none`}
          draggable={false}
        />
      </span>
    </a>
  );
};
