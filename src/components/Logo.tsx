import logoSrc from "@/assets/neurix-logo-light.png";

export const Logo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const h = size === "lg" ? "h-12" : size === "sm" ? "h-8" : "h-10";
  return (
    <a href="#top" className={`inline-flex items-center ${className}`} aria-label="Neurix — Home">
      <img
        src={logoSrc}
        alt="Neurix"
        className={`${h} w-auto select-none`}
        draggable={false}
      />
    </a>
  );
};
