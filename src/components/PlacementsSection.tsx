import {useState} from 'react';
import {ALUMNI_OUTCOMES, PLACEMENT_METRICS, RECRUITERS} from '../data/collegeData';

export function PlacementsSection() {
  const [selectedKey, setSelectedKey] = useState<string>(PLACEMENT_METRICS[0].key);
  const activeMetric =
    PLACEMENT_METRICS.find((item) => item.key === selectedKey) ?? PLACEMENT_METRICS[0];

  return (
    <section id="placements" className="py-16 lg:py-24 border-b border-stone-200 bg-[#F2EFE9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest uppercase text-[#57534E]">
              Career Development &amp; Placement Cell
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1C1917] [text-wrap:balance]">
              Verified Graduate Outcomes and Recruiting Partners
            </h2>
            <p className="mt-3 text-base text-[#44403C] leading-relaxed">
              Dedicated pre-placement technical coaching, aptitude mentoring, and corporate drives
              connecting Coimbatore graduates with national and global employers.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Placement breakdown by academic division"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-white border border-stone-200 rounded-lg self-start lg:self-auto"
          >
            {PLACEMENT_METRICS.map((item) => {
              const isActive = item.key === selectedKey;
              return (
                <button
                  key={item.key}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setSelectedKey(item.key)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E3A5F] text-white'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-1">
              <p className="text-xs text-[#57534E]">Placement Rate</p>
              <p className="font-mono text-3xl font-medium text-[#1C1917] tabular-nums">
                {activeMetric.placementRate}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-[#57534E]">Highest Package</p>
              <p className="font-mono text-3xl font-medium text-[#1C1917] tabular-nums">
                {activeMetric.highestPackage}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-[#57534E]">Median Package</p>
              <p className="font-mono text-3xl font-medium text-[#1C1917] tabular-nums">
                {activeMetric.medianPackage}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-[#57534E]">Total Campus Offers</p>
              <p className="font-mono text-3xl font-medium text-[#1C1917] tabular-nums">
                {activeMetric.totalOffers}
              </p>
            </div>
          </div>

          <p className="mt-6 pt-5 border-t border-stone-100 text-sm text-[#44403C]">
            {activeMetric.note}
          </p>
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs tracking-widest uppercase text-[#57534E]">
            Participating Corporate Recruiters
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 py-6 border-y border-stone-200">
            {RECRUITERS.map((company) => (
              <p key={company} className="text-sm font-medium text-[#1C1917]">
                {company}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs tracking-widest uppercase text-[#57534E]">
            Alumni Career Trajectories
          </p>
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ALUMNI_OUTCOMES.map((alum) => (
              <article
                key={alum.id}
                className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between"
              >
                <p className="text-sm text-[#44403C] leading-relaxed">
                  &ldquo;{alum.outcomeStatement}&rdquo;
                </p>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <p className="font-serif text-lg font-medium text-[#1C1917]">{alum.name}</p>
                  <p className="mt-0.5 text-xs font-semibold text-[#1E3A5F]">
                    {alum.role} · {alum.company}
                  </p>
                  <p className="mt-1 text-xs text-[#57534E]">
                    {alum.programme} · {alum.batch}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
