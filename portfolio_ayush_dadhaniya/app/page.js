import Navbar from '@/Navbar/page';
import About from '@/About/page';
import Education from '@/Education/page';
export default function Home() {
  return (
    <div className="bg-black h-fit">
      <Navbar />
      <section id="about" className="h-full"><About/></section>
      <section id="education" className="h-full"><Education/></section>
    </div>
  );
}
