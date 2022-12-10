import styles from '../../styles/components/sections/Contactame.module.css'
import { Button, Heading } from '../ui'

export const Contactame = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <Heading text='Contactame' type='white' fontSize={4.188} h={3}/>
            <p className={styles.text}>Quieres trabajar conmigo? Acordemos un meet<hr/> o contactame via mail para llevar tu idea al<hr/> próximo nivel</p>
            <Button text='Contacto' action={() => console.log("contacto")} bg="green"/>
        </div>
    </div>
  )
}
