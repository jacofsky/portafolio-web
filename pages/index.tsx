import { Layout } from "../components/layouts"
import { Home, MasProyectos, Proyectos, Skills } from "../components/sections"
import { Estudios } from "../components/sections/Estudios"


export default function HomePage() {
  return (
    <Layout contactame>
      <>
        <Home/>
        <Skills/>
        <Proyectos/>
        <MasProyectos/>
        <Estudios/>
      </>
    </Layout>
  )
}
