import { Heading, SkillCard } from '../ui'
import styles from '../../styles/components/sections/Skills.module.css'
import Image from 'next/image'
import Wave from '../../public/images/wave.svg'

export const Skills = () => {
  return (
    <section className={styles.section} id="skills">
        <div className={styles.container}>
            <div className={styles.heading}>
                <Heading text='Skills' fontSize={4.188} h={2} type="white"/>
            </div>
            <p className={styles.text}>Desde 2019 que empecé en este mundo de la<hr/> programación y constantemente he llevado proyectos con<hr/> tecnologías de las más recientes.</p>
            <div className={styles.cards}>
                <SkillCard icon='material-symbols:person' title='Habilidades blandas' text='Capacidad de trabajo en equipo con una buena comunicación.' icons={['logos:slack-icon', 'logos:jira', 'cib:notion', 'mdi:github']}/>

                <SkillCard icon='ph:monitor-bold' title='Front-end' text='Desarrollo de aplicaciones web y mobile.' icons={['logos:typescript-icon', 'logos:nextjs-icon', 'logos:react', 'logos:javascript']}/>

                <SkillCard icon='ant-design:database-outlined' title='Back-end' text='Capacidad de trabajo en equipo con una buena comunicación.' icons={['logos:nodejs-icon', 'vscode-icons:file-type-mongo']}/>

            </div>
        </div>
        <Image className={styles.wave} src={Wave} alt='' />
    </section>
  )
}
