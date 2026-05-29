import Navbar from '../components/Navbar'
import HeroSection from '../sections/HeroSection'
import RecruiterConsole from '../components/RecruiterConsole'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import CertificationsSection from '../sections/CertificationsSection'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <RecruiterConsole />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
