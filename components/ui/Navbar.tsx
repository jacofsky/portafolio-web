import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../public/images/logo.svg'
import styles from '../../styles/components/ui/Navbar.module.css'

export const Navbar = () => {

  const [openNav, setOpenNav] = useState(false)

  return (
    <nav className={styles.nav}>
        <Link href="/#home">
          <Image src={Logo} alt="Logo"/>
        </Link>

        <Icon onClick={() => setOpenNav(!openNav)} className={styles.hamburgerMenu} width={25} icon="mingcute:menu-fill" color='var(--accent)'/>

        <ul className={openNav ? styles.navItems : styles.navItemsOpen}>
            <li><Link href='/#home'>Inicio</Link></li>
            <li><Link href='/#skills'>Skills</Link></li>
            <li><Link href='/#proyectos'>Proyectos</Link></li>
            <li><Link href='/#estudios'>Estudios</Link></li>
            <li><Link href='/contacto'>Contacto</Link></li>
        </ul>
    </nav>
  )
}
