import Navbar from '@/components/Navbar/page';
import About from '@/components/About/page';
import Education from '@/components/Education/page';
import Skills from '@/components/Skills/page';
import Experience from '@/components/Experience/page';
import Projects from '@/components/Projects/page';
export default function Home() {
  return (
    <div className="bg-black h-fit">
      <Navbar />
      <section id="about" className="h-full scroll-smooth scroll-mt-20">
        <About />
      </section>
      <section id="education" className="h-full scroll-smooth scroll-mt-20">
        <Education />
      </section>
      <section id="skills" className="h-full scroll-mt-20 scroll-smooth">
        <Skills />
      </section>
      <section id="experience" className="h-full scroll-mt-20 scroll-smooth">
        <Experience />
      </section>
      <section id="projects" className="h-full scroll-mt-20 scroll-smooth">
        <Projects/>
      </section>
    </div>
  );
}
