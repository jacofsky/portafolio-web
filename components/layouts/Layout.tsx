import Head from 'next/head'
import { Footer, Navbar } from '../ui'

interface IProps {
  children: JSX.Element,
  title?: string,
  contactame?: boolean,
}

export const Layout = ({children, title, contactame = false}:IProps) => {
  return (
    <>
        <Head>
            <title>{title || 'Home - Valentin Jacofsky'}</title>
            <meta name="author" content="Valentin Jacofsky"/>
            <meta name="description" content={`Hola, soy Valentin Jacofsky y este es mi portafolio web como desarrollador Fullstack.`}/>
            <meta name="keywords" content={`valentin jacofsky, valentin, jacofsky, portafolio, desarrollador web, developer, desarrollador fullstack, desarrollador backend`}/>
            
            {/* <meta property="og:title" content={``} />
            <meta property="og:description" content={``} />
            <meta property="og:image" content={`${origin}/img/banner.png`} /> */}
        </Head>

        <Navbar/>

        <main>
            {children}
        </main>

        <Footer contactame={contactame}/>
    
    </>
  )
}
