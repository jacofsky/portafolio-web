import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.svg'
import styles from '../../styles/components/ui/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
        
        <Image src={Logo} alt="Logo"/>

        <ul className={styles.navItems}>
            <li><Link href='#1'>Inicio</Link></li>
            <li><Link href='#2'>Skills</Link></li>
            <li><Link href='#3'>Proyectos</Link></li>
            <li><Link href='#4'>Estudios</Link></li>
            <li><Link href='#1'>Contacto</Link></li>
        </ul>
    </nav>
  )
}
