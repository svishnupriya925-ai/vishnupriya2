import {useState} from 'react';
import {Menu, X} from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
}

const NAV_LINKS = [
  {label: 'Programs', href: '#programs'},
  {label: 'Placements', href: '#placements'},
  {label: 'Campus', href: '#campus'},
  {label: 'Notices', href: '#notices'},
  {label: 'Admissions', href: '#admissions'},
];

export function Header({onApplyClick}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A5F]"
        >
          Sri Krishna College
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 hover:text-[#1C1917] hover:underline underline-offset-4 decoration-stone-400 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A5F]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onApplyClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#1E3A5F] hover:bg-[#162D4C] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
          >
            Apply Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-stone-200 text-[#1C1917] hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FBF9F5] px-4 py-4 space-y-2">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-2 text-sm font-medium text-[#1C1917] hover:bg-stone-100 rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onApplyClick();
            }}
            className="w-full mt-2 px-4 py-3 text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#162D4C] rounded-md transition-colors cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
}
