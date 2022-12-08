import { Icon } from '@iconify/react'
import { Heading } from './Heading'
import styles from '../../styles/components/ui/SkillCard.module.css'

interface IProps {
    icon: string,
    title: string,
    text: string,
    icons: string[]
}

export const SkillCard = ({icon, title, text, icons}:IProps) => {
  return (
    <article className={styles.box}>
        <div className={styles.iconBox}>
            <Icon icon={`${icon}`} width={70} color='white'/>
        </div>
        <div className={styles.heading}>
            <Heading text={`${title}`} fontSize={2.5} h={3}/>
        </div>
        <p className={styles.text}>{text}</p>

        <div className={styles.tecBox}>
            <h4 className={styles.tecHeading}>Tecnologias</h4>
            <div className={styles.tecs}>
                {
                    icons.map((icon) => <Icon icon={`${icon}`} width={50}/>)
                }
            </div>
        </div>
    </article>
  )
}
