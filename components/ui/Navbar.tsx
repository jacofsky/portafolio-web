import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.svg'
import styles from '../../styles/components/ui/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
        
        <Image src={Logo} alt="Logo"/>

        <Icon className={styles.hamburgerMenu} icon="mingcute:menu-fill" color='var(--accent)'/>

        <ul className={styles.navItems}>
            <li><Link href='/#home'>Inicio</Link></li>
            <li><Link href='/#skills'>Skills</Link></li>
            <li><Link href='/#proyectos'>Proyectos</Link></li>
            <li><Link href='/#estudios'>Estudios</Link></li>
            <li><Link href='/contacto'>Contacto</Link></li>
        </ul>
    </nav>
  )
}
