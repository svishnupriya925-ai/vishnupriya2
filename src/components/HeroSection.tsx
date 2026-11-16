import {ArrowRight} from 'lucide-react';
import {COLLEGE_IMAGES, INSTITUTIONAL_METRICS} from '../data/collegeData';
import {ResilientImage} from './ResilientImage';

interface HeroSectionProps {
  onExploreProgrammes: () => void;
  onAdmissionsClick: () => void;
}

export function HeroSection({
  onExploreProgrammes,
  onAdmissionsClick,
}: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-[#57534E]">
                Kuniyamuthur, Coimbatore · Autonomous · Affiliated to Bharathiar University
              </p>

              <h1
                className="mt-5 font-serif font-medium tracking-tight text-[#1C1917] leading-[1.12] [text-wrap:balance]"
                style={{fontSize: 'clamp(2.25rem, 4vw, 3.75rem)'}}
              >
                Sri Krishna College of Arts and Science
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#44403C] leading-relaxed max-w-xl">
                Founded in 1997 in the foothills of the Western Ghats, our autonomous campus in
                Coimbatore pairs rigorous undergraduate, postgraduate, and doctoral scholarship with
                applied research across Computing, Commerce, Biosciences, and the Humanities.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onExploreProgrammes}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#162D4C] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onAdmissionsClick}
                className="text-sm font-semibold text-[#1E3A5F] hover:text-[#162D4C] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A5F]"
              >
                2027–28 Admissions Desk
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <figure className="h-full flex flex-col">
              <div className="flex-1 min-h-[280px] lg:min-h-[420px] overflow-hidden rounded-lg border border-stone-200 bg-[#EBE6DF]">
                <ResilientImage
                  src={COLLEGE_IMAGES.campusHero}
                  alt="Sri Krishna College of Arts and Science campus promenade in Kuniyamuthur, Coimbatore with sandstone academic buildings and Western Ghats backdrop"
                  fallbackTitle="Kuniyamuthur Main Campus Promenade"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-xs font-serif italic text-[#57534E]">
                Fig. 1 — Main academic quadrangle at Sugunapuram, Kuniyamuthur, Coimbatore – 641008.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {INSTITUTIONAL_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="font-mono text-2xl sm:text-3xl font-medium tracking-tight text-[#1C1917] tabular-nums">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-[#1C1917]">{metric.label}</p>
              <p className="text-xs text-[#57534E]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
