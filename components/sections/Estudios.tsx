import styles from '../../styles/components/sections/Estudios.module.css'
import { Heading } from '../ui'
import { EstudiosCard } from '../ui/EstudiosCard'
import { useState } from 'react'

type estudios = 'coderhouse' | 'ort' | 'ucema' | 'udemy'

export const Estudios = () => {

  const [estudio, setEstudio] = useState<estudios>('coderhouse')

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <Heading text='Estudios' fontSize={4.188} h={2}/>
      </div>

        <div className={styles.box}>
            <ul className={styles.list}>
                <li onClick={() => setEstudio('coderhouse')} className={`${estudio === 'coderhouse' && styles.active}`}>Coderhouse</li>
                <li onClick={() => setEstudio('ort')} className={`${estudio === 'ort' && styles.active}`}>ORT Argentina</li>
                <li onClick={() => setEstudio('ucema')} className={`${estudio === 'ucema' && styles.active}`}>Ucema</li>
                <li onClick={() => setEstudio('udemy')} className={`${estudio === 'udemy' && styles.active}`}>Udemy</li>
            </ul>
            
            <EstudiosCard logo='/images/ort.png' title='Coderhouse' years="2017 - 2022" text="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum:  -Lorem ipsum -Lorem ipsum -Lorem ipsum -Lorem ipsum" certificados={['Titulo secundario']} d={estudio === 'coderhouse' ? 'flex': 'none'} height={134} width={234}/>
            
            <EstudiosCard logo='/images/ort.png' title='Secundario ORT Argentina con especialización en Informática (con honores)' years="2017 - 2022" text="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum:  -Lorem ipsum -Lorem ipsum -Lorem ipsum -Lorem ipsum" certificados={['Titulo secundario']} d={estudio === 'ort' ? 'flex': 'none'} height={134} width={234}/>

            <EstudiosCard logo='/images/ort.png' title='Ucema' years="2017 - 2022" text="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum:  -Lorem ipsum -Lorem ipsum -Lorem ipsum -Lorem ipsum" certificados={['Titulo secundario']} d={estudio === 'ucema' ? 'flex': 'none'} height={134} width={234}/>

            <EstudiosCard logo='/images/ort.png' title='Udemy' years="2017 - 2022" text="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum:  -Lorem ipsum -Lorem ipsum -Lorem ipsum -Lorem ipsum" certificados={['Titulo secundario']} d={estudio === 'udemy' ? 'flex': 'none'} height={134} width={234}/>

        </div>
        


    </section>
  )
}
