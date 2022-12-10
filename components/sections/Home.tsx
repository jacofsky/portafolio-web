import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/components/sections/Home.module.css";
import { Button, Heading } from "../ui";

export const Home = () => {

  const router = useRouter()

  return (
    <section className={styles.container} id="home">
      <div>
        <div className={styles.heading}>
          <Heading text="Fullstack Developer" fontSize={4.188} />
        </div>

        <p className={styles.text}>
          Hola 👋, Soy <span>Valentin Jacofsky</span>
          <hr/>y puedo crear <span>aplicaciones geniales!</span>
        </p>

        <div className={styles.boxButton}>
          <Button text="Contacto" action={() => router.push('/contacto')} />
          <p className={styles.secondaryText}>Hagamos tus <hr/> ideas realidad!</p>
        </div>

      </div>

      <div>
        <Image className={styles.img} src="/images/facePicture.png" width={476} height={480} alt="Una foto de Valentin Jacofsky"/>
      </div>
    </section>
  );
};
