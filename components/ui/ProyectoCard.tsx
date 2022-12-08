import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/ui/ProyectoCard.module.css'

interface IProps {
  title: string,
  text: string,
  github?: string,
  tecnologias: string[],
  photo: string,
  web: string,
  l?: boolean
}

export const ProyectoCard = ({title, text, github, tecnologias, photo, web, l = false}:IProps) => {
  return (
    <article className={styles.card}>
        {
          l && <div className={styles.cardImage}>
          <Link href={web}>
            <Image src={photo} alt={`Image de portada del proyecto: ${title}`} width={707} height={397}/>
          </Link>
        </div>
        }
        <div className={styles.cardInfo}>
          <div className={styles.textBox}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            <div className={styles.links}>
              <Link className={styles.link} href={web}>Más información</Link>
              { github && <Link className={styles.link} href={github}>Código</Link> }
            </div>
            
          </div>
          <div className={styles.tecBox}>
            <p className={styles.tecText}>Tecnologias:</p>
            <div>
              {
                tecnologias.map((icon) => <Icon className={styles.icon} width={50} icon={icon}/>)
              }
            </div>
          </div>
            

        </div>

        {
          !l && <div className={styles.cardImage}>
          <Link href={web}>
            <Image src={photo} alt={`Image de portada del proyecto: ${title}`} width={707} height={397}/>
          </Link>
        </div>
        }
        
    </article>
  )
}
