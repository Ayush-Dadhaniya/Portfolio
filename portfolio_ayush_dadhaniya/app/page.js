import Navbar from '@/components/Navbar/page';
import About from '@/components/About/page';
import Education from '@/components/Education/page';
import Skills from '@/components/Skills/page';
import Experience from '@/components/Experience/page';
export default function Home() {
  return (
    <div className="bg-black h-fit">
      <Navbar />
      <section id="about" className="h-full"><About/></section>
      <section id="education" className="h-full"><Education/></section>
      <section id="skills" className="h-full"><Skills/></section>
      <section id="experience" className="h-full"><Experience/></section>
    </div>
  );
}
