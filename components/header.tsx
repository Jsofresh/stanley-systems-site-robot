import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full pt-8 md:pt-10">
      <header className="container flex items-center justify-between">
        <Link href="/">
          <Logo className="w-auto" />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-x-10 max-lg:hidden">
          {[
            { name: "How", href: "#how" },
            { name: "Results", href: "#results" },
            { name: "Case Study", href: "#case-study" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              className="inline-block font-mono uppercase text-foreground/60 transition-colors duration-150 ease-out hover:text-foreground"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          className="font-mono uppercase text-primary transition-colors duration-150 ease-out hover:text-primary/80 max-lg:hidden"
          href="#contact"
        >
          Audit Call
        </Link>

        <MobileMenu />
      </header>
    </div>
  );
};
