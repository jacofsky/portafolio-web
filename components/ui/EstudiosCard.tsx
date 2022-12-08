import Image from 'next/image'
import styles from '../../styles/components/ui/EstudiosCard.module.css'

interface IProps {
  logo: string,
  title: string,
  years: string,
  text: string,
  certificados: string[],
  d: 'flex' | 'none',
  height: number,
  width: number
}

export const EstudiosCard = ({logo, title, years, text, certificados, d, width, height}:IProps) => {
  return (
    <div className={styles.container} style={{display: d}}>

      <div>
        <div className={styles.header}>
          <Image src={logo} alt={`Logo sobre ${title}`} width={width} height={height}/>
          <div className={styles.headerText}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.years}>{years}</p>
          </div>
        </div>

        <div>
          <h4 className={styles.aprendizajes}>Aprendizajes:</h4>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      

      <div className={styles.certificadosBox}>
        <h4 className={styles.certTitles}>Certificados:</h4>
        <p className={styles.certText}>{certificados[0]}</p>
      </div>


    </div>
  )
}
