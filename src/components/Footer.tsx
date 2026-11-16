export function Footer() {
  return (
    <footer className="bg-[#FBF9F5] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-200">
          <div className="md:col-span-5 space-y-3">
            <p className="font-serif text-xl font-semibold text-[#1C1917]">
              Sri Krishna College of Arts and Science
            </p>
            <p className="text-sm text-[#44403C] leading-relaxed max-w-md">
              An Autonomous Institution affiliated to Bharathiar University, Coimbatore. Accredited
              by NAAC with A+ Grade and governed by the Sri Krishna Institutions Trust.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2 text-sm text-[#44403C]">
            <p className="font-mono text-xs uppercase tracking-wider text-[#57534E]">
              Campus Address
            </p>
            <p>Sugunapuram, Kuniyamuthur</p>
            <p>Coimbatore – 641008, Tamil Nadu, India</p>
            <p className="pt-1 font-mono text-xs text-[#1C1917] tabular-nums">
              +91 422 267 8400 · admissions@skcas.ac.in
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 text-sm">
            <p className="font-mono text-xs uppercase tracking-wider text-[#57534E]">
              Navigation
            </p>
            <ul className="space-y-1.5 text-[#44403C]">
              <li>
                <a href="#programs" className="hover:text-[#1C1917] hover:underline underline-offset-4">
                  Academic Programmes
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-[#1C1917] hover:underline underline-offset-4">
                  Placements &amp; Recruiters
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-[#1C1917] hover:underline underline-offset-4">
                  Campus &amp; Library
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-[#1C1917] hover:underline underline-offset-4">
                  Official Circulars
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-[#1C1917] hover:underline underline-offset-4">
                  Admissions Desk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#57534E]">
          <p>
            &copy; {new Date().getFullYear()} Sri Krishna College of Arts and Science, Coimbatore.
            All rights reserved.
          </p>
          <p>Mon–Sat · 09:00 to 16:30 IST · Office of the Principal &amp; Admissions</p>
        </div>
      </div>
    </footer>
  );
}
