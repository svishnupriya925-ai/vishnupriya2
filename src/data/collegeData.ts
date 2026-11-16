export type DegreeLevel = 'UG' | 'PG' | 'Research';
export type AcademicSchool =
  | 'Computing & Data'
  | 'Commerce & Management'
  | 'Biosciences'
  | 'Humanities & Media';

export interface Programme {
  id: string;
  code: string;
  title: string;
  level: DegreeLevel;
  school: AcademicSchool;
  duration: string;
  intake: number;
  eligibility: string;
  overview: string;
  coreSubjects: string[];
  careerPathways: string[];
}

export interface PlacementSchoolMetric {
  key: string;
  label: string;
  placementRate: string;
  highestPackage: string;
  medianPackage: string;
  totalOffers: string;
  note: string;
}

export interface AlumniOutcome {
  id: string;
  name: string;
  programme: string;
  batch: string;
  role: string;
  company: string;
  outcomeStatement: string;
}

export interface CampusFacilityTab {
  id: string;
  label: string;
  title: string;
  hours: string;
  location: string;
  summary: string;
  highlights: { label: string; detail: string }[];
}

export interface NoticeItem {
  id: string;
  category: 'Admissions' | 'Examinations' | 'Symposiums';
  date: string;
  referenceCode: string;
  title: string;
  summary: string;
  fullText: string;
}

export const COLLEGE_IMAGES = {
  campusHero: '/src/assets/images/skcas_campus_hero_1794816494361.jpg',
  centralLibrary: '/src/assets/images/skcas_central_library_1794816493974.jpg',
  researchLab: '/src/assets/images/skcas_research_lab_1794816494274.jpg',
  convocationHall: '/src/assets/images/skcas_convocation_hall_1794816494625.jpg',
} as const;

export const INSTITUTIONAL_METRICS = [
  {
    value: '1997',
    label: 'Year Established',
    detail: 'Kuniyamuthur, Coimbatore',
  },
  {
    value: '32',
    label: 'Academic Programmes',
    detail: 'UG, PG & Doctoral Tracks',
  },
  {
    value: '96.4%',
    label: 'Placement Record',
    detail: '2025–26 Graduating Cohort',
  },
  {
    value: 'A+',
    label: 'NAAC Accreditation',
    detail: 'Autonomous · Bharathiar Univ.',
  },
];

export const PROGRAMMES: Programme[] = [
  {
    id: 'bsc-cs-ai',
    code: 'UG-CS-01',
    title: 'B.Sc. Computer Science with Artificial Intelligence',
    level: 'UG',
    school: 'Computing & Data',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    eligibility: 'Higher Secondary (10+2) with Mathematics or Computer Science',
    overview:
      'Combines foundational algorithms, operating systems, and software engineering with applied machine learning, neural architectures, and cloud deployment.',
    coreSubjects: [
      'Data Structures & Algorithmic Design',
      'Machine Learning & Statistical Modelling',
      'Distributed Cloud Systems',
      'Natural Language Processing Lab',
    ],
    careerPathways: ['Software Engineer', 'Applied ML Analyst', 'Cloud Systems Associate'],
  },
  {
    id: 'bca',
    code: 'UG-CA-02',
    title: 'Bachelor of Computer Applications (BCA)',
    level: 'UG',
    school: 'Computing & Data',
    duration: '3 Years (6 Semesters)',
    intake: 180,
    eligibility: 'Higher Secondary (10+2) in any stream with Mathematics / Business Maths',
    overview:
      'Industry-oriented undergraduate degree focused on full-stack web engineering, enterprise database design, and mobile application architecture.',
    coreSubjects: [
      'Full-Stack TypeScript & Web Frameworks',
      'Relational & NoSQL Database Systems',
      'Enterprise DevOps & Containerization',
      'Applied Cybersecurity Foundations',
    ],
    careerPathways: ['Full-Stack Developer', 'QA Automation Engineer', 'Database Administrator'],
  },
  {
    id: 'bsc-it-cyber',
    code: 'UG-IT-03',
    title: 'B.Sc. Information Technology & Cyber Security',
    level: 'UG',
    school: 'Computing & Data',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Higher Secondary (10+2) with Mathematics / Computer Science',
    overview:
      'Trains students in network architecture, digital forensics, ethical penetration testing, and enterprise risk governance.',
    coreSubjects: [
      'Network Protocols & Perimeter Defence',
      'Cryptography & PKI Systems',
      'Digital Forensics & Incident Response',
      'Cloud Security Compliance',
    ],
    careerPathways: ['SOC Analyst', 'Network Security Engineer', 'IT Governance Associate'],
  },
  {
    id: 'bcom-pa',
    code: 'UG-CM-04',
    title: 'B.Com. Professional Accounting',
    level: 'UG',
    school: 'Commerce & Management',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    eligibility: 'Higher Secondary (10+2) with Commerce and Accountancy',
    overview:
      'Structured around chartered accountancy, corporate taxation, IFRS reporting standards, and forensic auditing workflows.',
    coreSubjects: [
      'Corporate Financial Reporting (Ind AS / IFRS)',
      'Direct & Indirect Taxation (GST)',
      'Cost & Management Accounting',
      'Statutory Auditing & Assurance',
    ],
    careerPathways: ['Audit Associate', 'Tax Consultant', 'Corporate Financial Analyst'],
  },
  {
    id: 'bcom-ba',
    code: 'UG-CM-05',
    title: 'B.Com. Business Analytics & FinTech',
    level: 'UG',
    school: 'Commerce & Management',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Higher Secondary (10+2) with Commerce / Mathematics',
    overview:
      'Bridges financial accounting with Python-based quantitative modelling, Tableau visualization, and digital payment ecosystems.',
    coreSubjects: [
      'Financial Modelling with Python & Excel',
      'Banking Technology & Digital Payments',
      'Econometrics & Forecasting',
      'Capital Markets & Portfolio Valuation',
    ],
    careerPathways: ['Financial Data Analyst', 'FinTech Operations Specialist', 'Risk Associate'],
  },
  {
    id: 'bba-logistics',
    code: 'UG-MG-06',
    title: 'BBA Logistics & Supply Chain Management',
    level: 'UG',
    school: 'Commerce & Management',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Higher Secondary (10+2) in any recognized discipline',
    overview:
      'Designed alongside Coimbatore manufacturing and export corridors, covering procurement, freight forwarding, ERP inventory control, and lean operations.',
    coreSubjects: [
      'Global Freight & Customs Documentation',
      'Warehouse Automation & ERP Systems',
      'Procurement & Vendor Governance',
      'Six Sigma Operations Management',
    ],
    careerPathways: ['Supply Chain Planner', 'Operations Coordinator', 'Export-Import Executive'],
  },
  {
    id: 'bsc-biotech',
    code: 'UG-BS-07',
    title: 'B.Sc. Biotechnology',
    level: 'UG',
    school: 'Biosciences',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Higher Secondary (10+2) with Biology / Botany & Zoology / Chemistry',
    overview:
      'Intensive laboratory training in molecular genetics, microbial fermentation, plant tissue culture, and bioinformatics.',
    coreSubjects: [
      'Recombinant DNA & Molecular Biology',
      'Bioprocess & Fermentation Technology',
      'Immunology & Clinical Diagnostics',
      'Computational Bioinformatics',
    ],
    careerPathways: ['Bioprocess Research Associate', 'Clinical Lab Analyst', 'Quality Control Chemist'],
  },
  {
    id: 'bsc-microbio',
    code: 'UG-BS-08',
    title: 'B.Sc. Microbiology',
    level: 'UG',
    school: 'Biosciences',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Higher Secondary (10+2) with Biology and Chemistry',
    overview:
      'Explores medical bacteriology, food safety testing, environmental bioremediation, and pharmaceutical quality assurance.',
    coreSubjects: [
      'Medical & Diagnostic Microbiology',
      'Food & Dairy Quality Control',
      'Virology & Mycology',
      'Industrial Microbial Genetics',
    ],
    careerPathways: ['Microbiologist (Pharma QA)', 'Food Safety Officer Trainee', 'Pathology Lab Specialist'],
  },
  {
    id: 'bsc-viscom',
    code: 'UG-HM-09',
    title: 'B.Sc. Visual Communication & Digital Media',
    level: 'UG',
    school: 'Humanities & Media',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Higher Secondary (10+2) in any recognized stream',
    overview:
      'Studio-driven curriculum spanning editorial typography, documentary filmmaking, sound design, and interactive interface systems.',
    coreSubjects: [
      'Visual Storytelling & Cinematography',
      'Editorial Layout & Brand Typography',
      'Audio Production & Post-Processing',
      'Interaction Design & Prototyping',
    ],
    careerPathways: ['Editorial Designer', 'Broadcast Producer', 'UI/UX Designer'],
  },
  {
    id: 'ba-english',
    code: 'UG-HM-10',
    title: 'B.A. English Literature',
    level: 'UG',
    school: 'Humanities & Media',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Higher Secondary (10+2) in any recognized stream',
    overview:
      'Critical study of classical, South Asian, and contemporary world literatures paired with technical writing, translation studies, and journalism.',
    coreSubjects: [
      'Indian Writing in English & Translation',
      'Literary Criticism & Cultural Theory',
      'Technical Documentation & Editing',
      'Print & Digital Journalism Practice',
    ],
    careerPathways: ['Editorial Writer', 'Communications Specialist', 'Academic Researcher'],
  },
  {
    id: 'msc-ds',
    code: 'PG-CS-11',
    title: 'M.Sc. Data Science & Big Data Analytics',
    level: 'PG',
    school: 'Computing & Data',
    duration: '2 Years (4 Semesters)',
    intake: 40,
    eligibility: 'B.Sc. Computer Science / IT / Mathematics / Statistics / BCA with 55%+',
    overview:
      'Graduate specialization in large-scale data engineering, Bayesian inference, deep learning pipelines, and enterprise decision intelligence.',
    coreSubjects: [
      'Statistical Inference & Stochastic Processes',
      'Apache Spark & Distributed Data Pipelines',
      'Deep Learning & Computer Vision',
      'Capstone Industry Analytics Thesis',
    ],
    careerPathways: ['Data Scientist', 'MLOps Engineer', 'Quantitative Analyst'],
  },
  {
    id: 'mcom-ib',
    code: 'PG-CM-12',
    title: 'M.Com. International Business',
    level: 'PG',
    school: 'Commerce & Management',
    duration: '2 Years (4 Semesters)',
    intake: 40,
    eligibility: 'B.Com. / BBA / B.A. Economics from a recognized university',
    overview:
      'Prepares graduates for cross-border trade strategy, foreign exchange risk management, and global corporate compliance.',
    coreSubjects: [
      'International Trade Policy & WTO Frameworks',
      'Forex Treasury & Derivatives Management',
      'Cross-Border Taxation & Transfer Pricing',
      'Global Supply Network Strategy',
    ],
    careerPathways: ['International Trade Analyst', 'Treasury Associate', 'Corporate Strategy Lead'],
  },
  {
    id: 'msw',
    code: 'PG-HM-13',
    title: 'Master of Social Work (MSW)',
    level: 'PG',
    school: 'Humanities & Media',
    duration: '2 Years (4 Semesters)',
    intake: 40,
    eligibility: 'Any Bachelor’s degree from a recognized university',
    overview:
      'Fieldwork-anchored postgraduate degree with specializations in Human Resource Management, Medical & Psychiatric Social Work, and Community Development.',
    coreSubjects: [
      'Industrial Relations & Labour Legislation',
      'Organizational Behaviour & HR Analytics',
      'Clinical Counselling & Mental Health Systems',
      'Rural & Urban Community Field Practicum',
    ],
    careerPathways: ['HR Business Partner', 'CSR Programme Manager', 'Medical Social Worker'],
  },
  {
    id: 'phd-cs',
    code: 'RES-CS-14',
    title: 'Ph.D. in Computer Science (Full-Time / Part-Time)',
    level: 'Research',
    school: 'Computing & Data',
    duration: '3–5 Years',
    intake: 12,
    eligibility: 'M.Sc. / MCA / M.Phil. with 55% marks & Bharathiar University CET/NET',
    overview:
      'Doctoral research programme investigating edge computing, medical image diagnostics, adversarial robustness, and low-resource Tamil NLP.',
    coreSubjects: [
      'Research Methodology & Publication Ethics',
      'Doctoral Colloquium & Literature Review',
      'Peer-Reviewed Journal Publications',
      'Dissertation Defence',
    ],
    careerPathways: ['Principal Research Scientist', 'University Faculty', 'R&D Architect'],
  },
  {
    id: 'phd-commerce',
    code: 'RES-CM-15',
    title: 'Ph.D. in Commerce & Management Studies',
    level: 'Research',
    school: 'Commerce & Management',
    duration: '3–5 Years',
    intake: 10,
    eligibility: 'M.Com. / MBA with 55% marks & Bharathiar University Research Entrance',
    overview:
      'Empirical research focusing on MSME clusters in Western Tamil Nadu, sustainable finance, ESG disclosure, and consumer behaviour.',
    coreSubjects: [
      'Advanced Econometrics & Structural Equations',
      'Empirical Finance Seminar',
      'Field Survey Design',
      'Doctoral Thesis',
    ],
    careerPathways: ['Policy Researcher', 'Management Faculty', 'Economic Advisory Consultant'],
  },
];

export const PLACEMENT_METRICS: PlacementSchoolMetric[] = [
  {
    key: 'overall',
    label: 'Overall 2025–26',
    placementRate: '96.4%',
    highestPackage: '₹12.5 LPA',
    medianPackage: '₹4.8 LPA',
    totalOffers: '2,140+',
    note: '184 recruiting organizations visited the Kuniyamuthur campus across IT, Banking, Audit, and Life Sciences.',
  },
  {
    key: 'computing',
    label: 'Computing & Data',
    placementRate: '98.1%',
    highestPackage: '₹12.5 LPA',
    medianPackage: '₹5.4 LPA',
    totalOffers: '1,020+',
    note: 'Primary offers across full-stack engineering, cloud reliability, cybersecurity operations, and data analytics.',
  },
  {
    key: 'commerce',
    label: 'Commerce & Management',
    placementRate: '95.8%',
    highestPackage: '₹9.2 LPA',
    medianPackage: '₹4.5 LPA',
    totalOffers: '810+',
    note: 'Strong Big-4 audit, tax advisory, wealth operations, and supply-chain coordinator placements.',
  },
  {
    key: 'biosciences',
    label: 'Biosciences & Media',
    placementRate: '92.6%',
    highestPackage: '₹7.8 LPA',
    medianPackage: '₹4.1 LPA',
    totalOffers: '310+',
    note: 'Placements across clinical diagnostics, pharmaceutical QA laboratories, and digital media studios.',
  },
];

export const RECRUITERS = [
  'Tata Consultancy Services',
  'Deloitte India',
  'Zoho Corporation',
  'Cognizant',
  'Ernst & Young (EY)',
  'Infosys',
  'Goldman Sachs Operations',
  'HCLTech',
  'Robert Bosch Engineering',
  'KPMG Global Services',
  'L&T Technology Services',
  'Biocon Biologics',
];

export const ALUMNI_OUTCOMES: AlumniOutcome[] = [
  {
    id: 'alumni-1',
    name: 'Karthikeyan Subramanian',
    programme: 'B.Sc. Computer Science',
    batch: 'Batch of 2024',
    role: 'Software Development Engineer',
    company: 'Zoho Corporation, Chennai',
    outcomeStatement:
      'Entered SKCAS with no prior coding background; through four semesters of systems labs and the campus Competitive Programming Guild, transitioned into building distributed billing services within three months of graduation.',
  },
  {
    id: 'alumni-2',
    name: 'Nandhini Rajagopal',
    programme: 'B.Com. Professional Accounting',
    batch: 'Batch of 2023',
    role: 'Audit & Assurance Senior Associate',
    company: 'Deloitte India, Bengaluru',
    outcomeStatement:
      'Combined the autonomous IFRS curriculum with on-campus CA Foundation mentoring, clearing intermediate modules alongside her degree and securing a direct campus offer in statutory audit.',
  },
  {
    id: 'alumni-3',
    name: 'Aravindh Balasubramani',
    programme: 'M.Sc. Biotechnology',
    batch: 'Batch of 2024',
    role: 'Bioprocess Associate',
    company: 'Biocon Biologics, Bengaluru',
    outcomeStatement:
      'Completed his six-month fermentation optimization thesis in the SKCAS Biosciences Research Centre, publishing in a peer-reviewed journal prior to joining upstream biologics manufacturing.',
  },
];

export const CAMPUS_FACILITIES: CampusFacilityTab[] = [
  {
    id: 'library',
    label: 'Central Library',
    title: 'Sri Krishna Central Research Library',
    hours: 'Mon–Sat · 08:00 to 20:00',
    location: 'Academic Block B · Ground & Mezzanine',
    summary:
      'A 28,000 sq. ft. quiet reading commons housing over 74,000 print volumes, 180 national and international periodicals, and institutional access to IEEE, SpringerLink, JSTOR, and INFLIBNET N-LIST.',
    highlights: [
      { label: 'Print Collection', detail: '74,200+ Volumes & Theses' },
      { label: 'Digital Repositories', detail: 'INFLIBNET, IEEE, EBSCOhost' },
      { label: 'Reading Capacity', detail: '450 Individual Study Carrels' },
      { label: 'Research Wing', detail: 'Dedicated Doctoral Discussion Rooms' },
    ],
  },
  {
    id: 'labs',
    label: 'Academic & Labs',
    title: 'Computing Clusters & Biosciences Research Labs',
    hours: 'Mon–Sat · 08:30 to 18:30',
    location: 'Science & Technology Quadrangle',
    summary:
      'Twenty-two specialized laboratories supporting high-throughput computing, cybersecurity sandboxes, molecular PCR diagnostics, plant tissue culture, and broadcast media editing.',
    highlights: [
      { label: 'Computing Terminals', detail: '1,400+ Dual-Boot Workstations' },
      { label: 'Biosciences Suite', detail: 'HPLC, PCR & Biosafety Cabinets' },
      { label: 'Media Studio', detail: '4K Edit Suites & Acoustic Booth' },
      { label: 'Campus Network', detail: '10 Gbps Fibre & Full Wi-Fi 6' },
    ],
  },
  {
    id: 'residential',
    label: 'Hostels & Dining',
    title: 'Residential Halls & Hygienic Dining Commons',
    hours: '24/7 Residential Security & Warden Desk',
    location: 'North & South Residential Enclaves',
    summary:
      'Separate residential hostels for men and women set amidst the green foothills of Kuniyamuthur, offering balanced South & North Indian vegetarian/non-vegetarian dining, study lounges, and medical care.',
    highlights: [
      { label: 'Accommodation', detail: 'Single, Twin & Triple Rooms' },
      { label: 'Dining Commons', detail: 'Steam-Cooked Nutrition Menu' },
      { label: 'Health Centre', detail: 'On-Campus Nurse & Visiting Physician' },
      { label: 'Commute Fleet', detail: '48 Buses Across Coimbatore & Pollachi' },
    ],
  },
  {
    id: 'sports',
    label: 'Sports & Clubs',
    title: 'Athletics Grounds & Student Societies',
    hours: 'Daily · 06:00 to 08:30 & 15:30 to 19:00',
    location: 'Western Ghats Sports Complex',
    summary:
      'Standard 400m athletics track, floodlit basketball and volleyball courts, indoor badminton arena, alongside 24 active student chapters including NSS, NCC, Rotaract, and Literature Guild.',
    highlights: [
      { label: 'Outdoor Grounds', detail: 'Cricket Oval, Football & 400m Track' },
      { label: 'Indoor Arena', detail: 'Badminton, Table Tennis & Chess' },
      { label: 'Civic Service', detail: 'NCC Army Wing & 4 NSS Units' },
      { label: 'Cultural Calendar', detail: 'Annual Krishna Fest & Lit Conclave' },
    ],
  },
];

export const NOTICES: NoticeItem[] = [
  {
    id: 'notice-1',
    category: 'Admissions',
    date: '14 Nov 2026',
    referenceCode: 'ADM/2026/114',
    title: 'Early Admission Window Open for 2027–28 UG & PG Cohorts',
    summary:
      'Online registration and campus counselling appointments are now open for B.Sc., B.Com., BBA, BCA, and Postgraduate programmes.',
    fullText:
      'Prospective candidates seeking admission to Undergraduate and Postgraduate programmes at Sri Krishna College of Arts and Science (Autonomous), Coimbatore for the academic year 2027–28 may submit their preliminary inquiry online or visit the Admissions Office at Academic Block A between 09:30 and 16:30 (Monday to Saturday). Merit scholarships are awarded based on Class XII / UG aggregate and interview performance.',
  },
  {
    id: 'notice-2',
    category: 'Examinations',
    date: '09 Nov 2026',
    referenceCode: 'COE/2026/089',
    title: 'Odd Semester End-Semester Practical & Theory Timetable Published',
    summary:
      'Controller of Examinations has released the revised Autonomous End-Semester examination schedule for all II and III Year students.',
    fullText:
      'All Undergraduate and Postgraduate candidates appearing for the November–December 2026 Autonomous End-Semester Examinations are instructed to verify their subject codes and hall allocations through their department advisors. Hall tickets will be issued five working days prior to the commencement of theory examinations.',
  },
  {
    id: 'notice-3',
    category: 'Symposiums',
    date: '02 Nov 2026',
    referenceCode: 'RES/2026/041',
    title: 'National Conference on Sustainable Biosciences & AI Analytics',
    summary:
      'Two-day interdisciplinary conference hosted by the School of Biosciences and School of Computing on 11–12 December 2026.',
    fullText:
      'Research scholars, postgraduate students, and industry practitioners are invited to submit extended abstracts in computational genomics, green bioprocessing, and responsible AI for healthcare. Selected papers will be published in the conference proceedings with ISBN indexing.',
  },
  {
    id: 'notice-4',
    category: 'Admissions',
    date: '26 Oct 2026',
    referenceCode: 'SCH/2026/027',
    title: 'Merit & Sports Endowment Scholarship Applications Invited',
    summary:
      'Tuition fee waiver applications for state-level athletes and first-generation university scholars close on 30 November 2026.',
    fullText:
      'Eligible students representing Bharathiar University, Tamil Nadu state, or national federations in recognized athletics disciplines, as well as first-generation graduates maintaining 80%+ attendance, may submit attested credentials to the Student Welfare Office before the deadline.',
  },
];
