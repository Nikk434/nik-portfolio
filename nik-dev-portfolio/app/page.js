import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contacts";
import Navbar from "@/components/navbar";
export default function Home() {
  return( 
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  )
}
