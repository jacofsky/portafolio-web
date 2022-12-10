import { Heading, ProyectoCard } from "../ui"
import styles from '../../styles/components/sections/Proyectos.module.css'

export const Proyectos = () => {
  return (
    <section className={styles.section} id="proyectos">
        <div className={styles.heading}>
            <Heading text="Proyectos" h={2} fontSize={3.75}/>
        </div>

        <ProyectoCard title="Kartz" text="Kartz es una aplicación mobile en la cual existen dos usuarios. El “host” el cual puede publicar su auto para alquilar por el tiempo que determine y el “rider” usuario el cual alquila autos." web="/proyectos/kartz" tecnologias={['logos:typescript-icon', 'logos:jira', 'logos:react']} photo='/images/kartz.png' />

        <ProyectoCard title="Unsplash App" text="Unsplash App es una aplicación en la cual puedes generar un usuario y subir tus imágenes, las cuales son subidas a cloudinary, junto a un título." web="https://my-unsplash-app.vercel.app/" tecnologias={['logos:typescript-icon', 'logos:react', 'logos:nodejs-icon', 'vscode-icons:file-type-mongo']} photo='/images/unsplash.png' github="https://github.com/jacofsky/my-unsplash-app" l />

        <ProyectoCard title="Countries App" text="En este proyecto desarrollado en Nextjs podrás buscar y ver más información sobre todos los países del mundo, además de ver su bandera." web="https://countries-app-ashy.vercel.app/" github="https://github.com/jacofsky/countries-app" tecnologias={['logos:typescript-icon', 'logos:nextjs-icon']} photo='/images/countries.png' />
    </section>
  )
}
