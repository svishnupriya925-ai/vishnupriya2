import {FormEvent, useEffect, useState} from 'react';
import {CheckCircle2, ChevronDown, ChevronUp} from 'lucide-react';
import {NOTICES, NoticeItem, PROGRAMMES} from '../data/collegeData';

interface NoticesAndAdmissionsSectionProps {
  preselectedProgramme: string;
}

type NoticeCategory = 'All' | NoticeItem['category'];

const NOTICE_CATEGORIES: NoticeCategory[] = [
  'All',
  'Admissions',
  'Examinations',
  'Symposiums',
];

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  programme?: string;
}

export function NoticesAndAdmissionsSection({
  preselectedProgramme,
}: NoticesAndAdmissionsSectionProps) {
  const [noticeCategory, setNoticeCategory] = useState<NoticeCategory>('All');
  const [expandedNoticeId, setExpandedNoticeId] = useState<string>(NOTICES[0].id);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programme, setProgramme] = useState(PROGRAMMES[0].title);
  const [counselingMode, setCounselingMode] = useState<'campus' | 'virtual'>('campus');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProgramme) {
      setProgramme(preselectedProgramme);
      setSubmittedRef(null);
    }
  }, [preselectedProgramme]);

  const filteredNotices = NOTICES.filter(
    (item) => noticeCategory === 'All' || item.category === noticeCategory
  );

  const validateForm = (): boolean => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter the applicant’s full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 12) {
      nextErrors.phone = 'Enter a valid 10-digit mobile number.';
    }
    if (!programme) {
      nextErrors.programme = 'Please select a degree programme.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(`SKCAS-2027-${randomCode}`);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F2EFE9]/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div id="notices" className="lg:col-span-6">
          <p className="font-mono text-xs tracking-widest uppercase text-[#57534E]">
            Registrar &amp; Academic Circulars
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#1C1917]">
            Official Notices and Upcoming Dates
          </h2>

          <div
            role="tablist"
            aria-label="Filter campus notices"
            className="mt-6 inline-flex flex-wrap items-center gap-1 p-1 bg-white border border-stone-200 rounded-lg"
          >
            {NOTICE_CATEGORIES.map((category) => {
              const isActive = noticeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setNoticeCategory(category)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E3A5F] text-white'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-6 divide-y divide-stone-200 border-y border-stone-200 bg-white rounded-lg px-5">
            {filteredNotices.map((notice) => {
              const isExpanded = expandedNoticeId === notice.id;
              return (
                <article key={notice.id} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedNoticeId((prev) => (prev === notice.id ? '' : notice.id))
                    }
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#57534E]">
                        <span>{notice.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{notice.date}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[#78716C]">{notice.referenceCode}</span>
                      </div>
                      <h3 className="mt-1.5 font-serif text-lg font-medium text-[#1C1917] group-hover:text-[#1E3A5F] transition-colors">
                        {notice.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#44403C]">{notice.summary}</p>
                    </div>
                    <span className="mt-1 text-[#57534E] shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-stone-100 text-sm text-[#44403C] leading-relaxed">
                      {notice.fullText}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div id="admissions" className="lg:col-span-6">
          <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
            <p className="font-mono text-xs tracking-widest uppercase text-[#57534E]">
              Admissions Office · Kuniyamuthur
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1C1917]">
              Request Admissions Counselling
            </h2>
            <p className="mt-2 text-sm text-[#44403C] leading-relaxed">
              Submit your academic interest to receive fee structure details, scholarship
              eligibility review, or schedule a guided Coimbatore campus visit.
            </p>

            {submittedRef ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 p-6 bg-[#FBF9F5] border border-stone-300 rounded-lg space-y-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#14532D] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#14532D]">
                      Inquiry Registered Successfully
                    </p>
                    <p className="mt-1 text-sm text-[#1C1917]">
                      Thank you, <span className="font-semibold">{fullName}</span>. Our Admissions
                      Counsellor will contact you at <span className="font-medium">{email}</span>{' '}
                      within one working day.
                    </p>
                  </div>
                </div>

                <dl className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <dt className="text-[#57534E]">Reference Number</dt>
                    <dd className="mt-0.5 font-mono font-semibold text-[#1C1917] tabular-nums">
                      {submittedRef}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#57534E]">Selected Programme</dt>
                    <dd className="mt-0.5 font-semibold text-[#1C1917]">{programme}</dd>
                  </div>
                  <div>
                    <dt className="text-[#57534E]">Counselling Preference</dt>
                    <dd className="mt-0.5 font-medium text-[#1C1917]">
                      {counselingMode === 'campus'
                        ? 'In-Person at Kuniyamuthur Campus'
                        : 'Virtual Video / Phone Session'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#57534E]">Admissions Helpline</dt>
                    <dd className="mt-0.5 font-mono text-[#1C1917] tabular-nums">
                      +91 422 267 8400
                    </dd>
                  </div>
                </dl>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-[#1E3A5F] bg-white border border-stone-300 hover:bg-stone-50 rounded-md transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="applicant-name"
                    className="block text-xs font-semibold text-[#1C1917]"
                  >
                    Applicant Full Name
                  </label>
                  <input
                    id="applicant-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({...errors, fullName: undefined});
                    }}
                    placeholder="e.g., Meenakshi Sundaram"
                    className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-stone-300 rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-[#9A3412]">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="applicant-email"
                      className="block text-xs font-semibold text-[#1C1917]"
                    >
                      Email Address
                    </label>
                    <input
                      id="applicant-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({...errors, email: undefined});
                      }}
                      placeholder="name@example.com"
                      className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-stone-300 rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#9A3412]">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-phone"
                      className="block text-xs font-semibold text-[#1C1917]"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({...errors, phone: undefined});
                      }}
                      placeholder="+91 98422 00000"
                      className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-stone-300 rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#9A3412]">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="applicant-programme"
                    className="block text-xs font-semibold text-[#1C1917]"
                  >
                    Programme of Interest
                  </label>
                  <select
                    id="applicant-programme"
                    value={programme}
                    onChange={(e) => {
                      setProgramme(e.target.value);
                      if (errors.programme) setErrors({...errors, programme: undefined});
                    }}
                    className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-stone-300 rounded-md text-[#1C1917] focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]"
                  >
                    {PROGRAMMES.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title} ({item.level})
                      </option>
                    ))}
                  </select>
                  {errors.programme && (
                    <p className="mt-1 text-xs text-[#9A3412]">{errors.programme}</p>
                  )}
                </div>

                <div>
                  <span className="block text-xs font-semibold text-[#1C1917]">
                    Counselling Mode
                  </span>
                  <div className="mt-1.5 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCounselingMode('campus')}
                      className={`px-3 py-2.5 text-xs font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                        counselingMode === 'campus'
                          ? 'border-[#1E3A5F] bg-[#1E3A5F] text-white'
                          : 'border-stone-300 bg-[#FBF9F5] text-[#44403C] hover:border-stone-400'
                      }`}
                    >
                      In-Person Campus Visit
                    </button>
                    <button
                      type="button"
                      onClick={() => setCounselingMode('virtual')}
                      className={`px-3 py-2.5 text-xs font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                        counselingMode === 'virtual'
                          ? 'border-[#1E3A5F] bg-[#1E3A5F] text-white'
                          : 'border-stone-300 bg-[#FBF9F5] text-[#44403C] hover:border-stone-400'
                      }`}
                    >
                      Virtual Counselling
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="applicant-notes"
                    className="block text-xs font-semibold text-[#1C1917]"
                  >
                    Academic Background or Questions (Optional)
                  </label>
                  <textarea
                    id="applicant-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share your Class XII / UG stream, hostel inquiry, or scholarship question..."
                    className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-stone-300 rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#162D4C] rounded-md transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
                >
                  Submit Admissions Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
