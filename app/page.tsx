import Hero from "@/components/home/hero";
import Slider from "@/components/home/slider";
import CaseStudy from "@/components/home/caseStudy";
import OurProduct from "@/components/home/ourProduct";
import FreeAssessment from "@/components/freeAssessment";



export default function Home() {
  return (
    <main>
      <Hero />
      <CaseStudy />
      <OurProduct />
      <Slider />
      <FreeAssessment />
    </main>
  )
}
