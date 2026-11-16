import {useMemo, useState} from 'react';
import {ArrowUpRight, Search, X} from 'lucide-react';
import {
  AcademicSchool,
  DegreeLevel,
  PROGRAMMES,
  Programme,
} from '../data/collegeData';

interface ProgrammesSectionProps {
  onSelectProgrammeForInquiry: (programmeTitle: string) => void;
}

const LEVELS: {label: string; value: 'All' | DegreeLevel}[] = [
  {label: 'All Programmes', value: 'All'},
  {label: 'Undergraduate', value: 'UG'},
  {label: 'Postgraduate', value: 'PG'},
  {label: 'Research (Ph.D)', value: 'Research'},
];

const SCHOOLS: ('All Schools' | AcademicSchool)[] = [
  'All Schools',
  'Computing & Data',
  'Commerce & Management',
  'Biosciences',
  'Humanities & Media',
];

export function ProgrammesSection({
  onSelectProgrammeForInquiry,
}: ProgrammesSectionProps) {
  const [selectedLevel, setSelectedLevel] = useState<'All' | DegreeLevel>('All');
  const [selectedSchool, setSelectedSchool] = useState<'All Schools' | AcademicSchool>(
    'All Schools'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProgramme, setActiveProgramme] = useState<Programme | null>(null);

  const filteredProgrammes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PROGRAMMES.filter((prog) => {
      const matchesLevel = selectedLevel === 'All' || prog.level === selectedLevel;
      const matchesSchool =
        selectedSchool === 'All Schools' || prog.school === selectedSchool;
      const matchesQuery =
        query === '' ||
        prog.title.toLowerCase().includes(query) ||
        prog.school.toLowerCase().includes(query) ||
        prog.code.toLowerCase().includes(query);
      return matchesLevel && matchesSchool && matchesQuery;
    });
  }, [selectedLevel, selectedSchool, searchQuery]);

  return (
    <section id="programs" className="py-16 lg:py-24 border-b border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest uppercase text-[#57534E]">
              Academic Catalogue · Autonomous Curriculum
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1C1917] [text-wrap:balance]">
              Schools and Degree Programmes
            </h2>
            <p className="mt-3 text-base text-[#44403C] leading-relaxed">
              Structured under the Choice Based Credit System (CBCS) with mandatory industry
              internships, laboratory practicums, and Bharathiar University degree conferral.
            </p>
          </div>

          <div className="w-full lg:w-80">
            <label htmlFor="programme-search" className="sr-only">
              Search academic programmes
            </label>
            <div className="relative">
              <Search
                className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="programme-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by degree, discipline, or code..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Degree level filter"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F2EFE9] border border-stone-200 rounded-lg"
          >
            {LEVELS.map((tab) => {
              const active = selectedLevel === tab.value;
              return (
                <button
                  key={tab.value}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setSelectedLevel(tab.value)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-[#1C1917] shadow-sm'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {SCHOOLS.map((school) => {
              const active = selectedSchool === school;
              return (
                <button
                  key={school}
                  type="button"
                  onClick={() => setSelectedSchool(school)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'border-[#1E3A5F] bg-[#1E3A5F] text-white'
                      : 'border-stone-200 bg-white text-[#44403C] hover:border-stone-400 hover:text-[#1C1917]'
                  }`}
                >
                  {school}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-[#57534E]">
          <p className="tabular-nums">
            Showing {filteredProgrammes.length} of {PROGRAMMES.length} featured programmes
          </p>
          {(selectedLevel !== 'All' ||
            selectedSchool !== 'All Schools' ||
            searchQuery !== '') && (
            <button
              type="button"
              onClick={() => {
                setSelectedLevel('All');
                setSelectedSchool('All Schools');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#1E3A5F] hover:underline underline-offset-4 cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredProgrammes.length === 0 ? (
          <div className="mt-8 p-10 text-center bg-white border border-stone-200 rounded-lg">
            <p className="font-serif text-xl text-[#1C1917]">No matching programmes found</p>
            <p className="mt-2 text-sm text-[#57534E]">
              Try clearing your search terms or switching back to all academic schools.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedLevel('All');
                setSelectedSchool('All Schools');
                setSearchQuery('');
              }}
              className="mt-5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A5F] hover:bg-[#162D4C] rounded-md transition-colors cursor-pointer"
            >
              Show All Programmes
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProgrammes.map((prog) => (
              <article
                key={prog.id}
                className="group bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between hover:border-[#1E3A5F]/60 transition-colors duration-150"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#57534E]">
                    <span>{prog.school}</span>
                    <span className="font-mono tabular-nums text-[#78716C]">{prog.code}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-xl font-medium text-[#1C1917] leading-snug">
                    {prog.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#57534E]">
                    <span>{prog.level === 'UG' ? 'Undergraduate' : prog.level === 'PG' ? 'Postgraduate' : 'Doctoral Research'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{prog.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">Intake {prog.intake}</span>
                  </div>

                  <p className="mt-4 text-sm text-[#44403C] leading-relaxed">
                    {prog.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveProgramme(prog)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A5F] hover:text-[#162D4C] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Syllabus &amp; Eligibility</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProgrammeForInquiry(prog.title)}
                    className="text-xs font-medium text-[#57534E] hover:text-[#1C1917] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Inquire
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {activeProgramme && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="programme-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-[2px]"
          onClick={() => setActiveProgramme(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#FBF9F5] border border-stone-300 rounded-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-stone-200">
              <div>
                <p className="font-mono text-xs text-[#57534E]">
                  {activeProgramme.code} · {activeProgramme.school}
                </p>
                <h3
                  id="programme-modal-title"
                  className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]"
                >
                  {activeProgramme.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProgramme(null)}
                aria-label="Close programme details"
                className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-stone-200 text-[#44403C] hover:bg-stone-200/60 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-stone-200">
              <div>
                <dt className="text-xs text-[#57534E]">Duration</dt>
                <dd className="mt-1 text-sm font-semibold text-[#1C1917]">
                  {activeProgramme.duration}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#57534E]">Annual Intake</dt>
                <dd className="mt-1 text-sm font-semibold text-[#1C1917] tabular-nums">
                  {activeProgramme.intake} Seats
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#57534E]">Degree Mode</dt>
                <dd className="mt-1 text-sm font-semibold text-[#1C1917]">
                  Autonomous CBCS
                </dd>
              </div>
            </dl>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E]">
                  Admission Eligibility
                </h4>
                <p className="mt-2 text-sm text-[#1C1917] leading-relaxed">
                  {activeProgramme.eligibility}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E]">
                  Core Curriculum Highlights
                </h4>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProgramme.coreSubjects.map((subject) => (
                    <li
                      key={subject}
                      className="text-sm text-[#1C1917] py-2 px-3 bg-white border border-stone-200 rounded-md"
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E]">
                  Graduate Career Pathways
                </h4>
                <p className="mt-2 text-sm text-[#44403C]">
                  {activeProgramme.careerPathways.join('  ·  ')}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-200 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveProgramme(null)}
                className="px-4 py-2.5 text-xs font-semibold text-[#44403C] bg-white border border-stone-300 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeProgramme.title;
                  setActiveProgramme(null);
                  onSelectProgrammeForInquiry(title);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1E3A5F] hover:bg-[#162D4C] rounded-md transition-colors cursor-pointer"
              >
                Inquire for This Programme
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
