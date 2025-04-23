import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { TechStackShowcase } from "@/components/home/TechStackShowcase";
import { Contact } from "@/components/home/Contact";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Certificate } from "../components/home/Certificates";
import EducationComponent from "../components/EducationComponent";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Projects />
      <Certificate />
      <TechStackShowcase />
      <EducationComponent />
      <Contact />
    </>
  );
};

export default HomePage;
