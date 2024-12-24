import Featured from "./Components/Featured"
import Hero from "./Components/Hero"
import OurProducts from "./Components/OurProducts"
import TopCategories from "./Components/TopCategories"

export default function Homepage (){
  return (
    <>
    <main>
      <Hero/>
      <Featured/>
      <TopCategories/>
      <OurProducts/>
    </main>
    </>
  )
}