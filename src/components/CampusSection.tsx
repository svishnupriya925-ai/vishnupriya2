import {useState} from 'react';
import {CAMPUS_FACILITIES, COLLEGE_IMAGES} from '../data/collegeData';
import {ResilientImage} from './ResilientImage';

export function CampusSection() {
  const [activeFacilityId, setActiveFacilityId] = useState<string>(CAMPUS_FACILITIES[0].id);
  const activeFacility =
    CAMPUS_FACILITIES.find((tab) => tab.id === activeFacilityId) ?? CAMPUS_FACILITIES[0];

  return (
    <section id="campus" className="py-16 lg:py-24 border-b border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest uppercase text-[#57534E]">
            Campus Infrastructure &amp; Student Commons
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1C1917] [text-wrap:balance]">
            Libraries, Research Laboratories, and Residential Life
          </h2>
          <p className="mt-3 text-base text-[#44403C] leading-relaxed">
            Set across a landscaped green enclave on Palakkad Main Road in Kuniyamuthur, the
            campus balances quiet scholarly study spaces with collaborative studio and lab blocks.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure className="flex flex-col">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 bg-[#EBE6DF]">
              <ResilientImage
                src={COLLEGE_IMAGES.centralLibrary}
                alt="Sri Krishna Central Library interior with teak bookshelves and students studying"
                fallbackTitle="Central Research Library"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-xs font-serif italic text-[#57534E]">
              Fig. 2 — Central Research Library reading hall housing 74,200+ volumes.
            </figcaption>
          </figure>

          <figure className="flex flex-col">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 bg-[#EBE6DF]">
              <ResilientImage
                src={COLLEGE_IMAGES.researchLab}
                alt="Students collaborating inside the Computing and Biosciences Research Laboratory"
                fallbackTitle="Computing & Biosciences Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-xs font-serif italic text-[#57534E]">
              Fig. 3 — Interdisciplinary Computing and Biosciences research wing.
            </figcaption>
          </figure>

          <figure className="flex flex-col">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 bg-[#EBE6DF]">
              <ResilientImage
                src={COLLEGE_IMAGES.convocationHall}
                alt="Timber-paneled seminar and convocation auditorium on campus"
                fallbackTitle="Main Convocation Auditorium"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-xs font-serif italic text-[#57534E]">
              Fig. 4 — Seminar and convocation auditorium for academic conclaves.
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <h3 className="font-serif text-2xl font-medium text-[#1C1917]">
              Campus Facilities Directory
            </h3>

            <div
              role="tablist"
              aria-label="Campus facilities categories"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F2EFE9] border border-stone-200 rounded-lg"
            >
              {CAMPUS_FACILITIES.map((tab) => {
                const isActive = tab.id === activeFacilityId;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => setActiveFacilityId(tab.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#1C1917] shadow-sm'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-3">
              <p className="font-mono text-xs text-[#57534E]">
                {activeFacility.location} · {activeFacility.hours}
              </p>
              <h4 className="font-serif text-2xl font-medium text-[#1C1917]">
                {activeFacility.title}
              </h4>
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                {activeFacility.summary}
              </p>
            </div>

            <dl className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeFacility.highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-4 bg-[#FBF9F5] border border-stone-200 rounded-md"
                >
                  <dt className="text-xs text-[#57534E]">{item.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#1C1917]">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
