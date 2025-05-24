import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Education from "@/components/home/Education";
import FunFacts from "@/components/home/FunFacts";
import Project from "@/components/home/Projects";
import Skills from "@/components/home/Skill";



export default async function Home() {

  return (
    <div className="pb-16   space-y-24
">
      <Banner />
      <About />
      <Project />
      {/* <ProjectsSection /> */}
      <Skills />
      <Education />
      <FunFacts />
    </div>
  );
}
