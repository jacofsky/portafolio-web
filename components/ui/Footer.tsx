import Image from "next/image"
import Link from "next/link"
import Logo from '../../public/images/footerLogo.svg'
import styles from '../../styles/components/ui/Footer.module.css'
import { Icon } from '@iconify/react';
import { Contactame } from "../sections";

interface IProps {
  contactame?: boolean
}

export const Footer = ({contactame = false}:IProps) => {
  return (
    <footer className={styles.footer}>

      {
        contactame && <Contactame/>
      }

      <div className={styles.infoBox}>

        <Image src={Logo} alt="Footer logo" />

        <p className={styles.text}>“La motivación es lo que te pone en marcha,<hr/> el hábito es lo que hace que sigas”</p>

        <div className={styles.iconsContainer}>

          <Link target='_blank' href={'https://github.com/jacofsky'}>
            <div className={styles.iconBox}>
              <Icon icon="fe:github-alt" width={44}/>
            </div>
          </Link>

          <Link target='_blank' href={'https://www.linkedin.com/in/valentin-jacofsky-127b9b210/'}>
            <div className={styles.iconBox}>
              <Icon icon="uim:linkedin-alt" width={44}/>
            </div>
          </Link>

          <Link target='_blank' href={'https://twitter.com/j4cofsky'}>
            <div className={styles.iconBox}>
              <Icon icon="mdi:twitter" width={44}/>
            </div>
          </Link>

        </div>
      </div>
    </footer>
  )
}
