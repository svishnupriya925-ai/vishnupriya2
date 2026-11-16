import {useState} from 'react';
import {CampusSection} from './components/CampusSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {HeroSection} from './components/HeroSection';
import {NoticesAndAdmissionsSection} from './components/NoticesAndAdmissionsSection';
import {PlacementsSection} from './components/PlacementsSection';
import {ProgrammesSection} from './components/ProgrammesSection';

export default function App() {
  const [selectedProgrammeForInquiry, setSelectedProgrammeForInquiry] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleSelectProgrammeForInquiry = (programmeTitle: string) => {
    setSelectedProgrammeForInquiry(programmeTitle);
    scrollToSection('admissions');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      <Header onApplyClick={() => scrollToSection('admissions')} />

      <main className="flex-1">
        <HeroSection
          onExploreProgrammes={() => scrollToSection('programs')}
          onAdmissionsClick={() => scrollToSection('admissions')}
        />

        <ProgrammesSection onSelectProgrammeForInquiry={handleSelectProgrammeForInquiry} />

        <PlacementsSection />

        <CampusSection />

        <NoticesAndAdmissionsSection preselectedProgramme={selectedProgrammeForInquiry} />
      </main>

      <Footer />
    </div>
  );
}
