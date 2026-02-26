import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const name = "David Luff";
  const footerText = `© ${currentYear} ${name}`;

  const legalLinks = [
    { href: "/legal/imprint", label: "Impressum" },
    { href: "/legal/privacy-policy", label: "Datenschutz" },
    { href: "/legal/cookie-policy", label: "Cookies" },
  ];

  return (
    <footer className="w-full bg-background text-muted-foreground py-8 border-t border-border z-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <span className="text-sm">{footerText}</span>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center space-x-4 text-sm">
          {legalLinks.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
              {index < legalLinks.length - 1 && (
                <span className="mx-2 text-muted-foreground">|</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}