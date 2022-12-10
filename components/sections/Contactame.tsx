import { useRouter } from 'next/router'
import styles from '../../styles/components/sections/Contactame.module.css'
import { Button, Heading } from '../ui'

export const Contactame = () => {

  const router = useRouter()

  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <Heading text='Contactame' type='white' fontSize={4.188} h={3}/>
            <p className={styles.text}>Quieres trabajar conmigo? Acordemos un meet<hr/> o contactame via mail para llevar tu idea al<hr/> próximo nivel</p>
            <Button text='Contacto' action={() => router.push('/contacto')} bg="green"/>
        </div>
    </div>
  )
}
