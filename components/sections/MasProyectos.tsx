import styles from '../../styles/components/sections/MasProyectos.module.css'
import { Button, Heading } from '../ui'

export const MasProyectos = () => {
  return (
    <section className={styles.section}>
        <Heading h={3} text="¿Quieres ver mas proyectos?" fontSize={4.188} type="white"/>
        <p className={styles.text}>Hechale un vistaso a mis proyectos en github para darte<hr/> una idea de lo que soy capaz de hacer!</p>
        <Button text='Github' action={() => console.log('Github')}/>
    </section>
  )
}
