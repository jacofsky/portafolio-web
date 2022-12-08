import Image from "next/image";
import styles from "../../styles/components/sections/Home.module.css";
import { Button, Heading } from "../ui";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div>
        <Heading text="Fullstack Developer" fontSize={4.188} />
        <p className={styles.text}>
          Hola 👋, Soy <span>Valentin Jacofsky</span>
          <hr/>y puedo crear <span>aplicaciones geniales!</span>
        </p>

        <div className={styles.boxButton}>
          <Button text="Contacto" action={() => console.log("Contacto")} />
          <p className={styles.secondaryText}>Hagamos tus <hr/> ideas realidad!</p>
        </div>

      </div>

      <div>
        <Image className={styles.img} src="/images/facePicture.png" width={476} height={480} alt="Una foto de Valentin Jacofsky"/>
      </div>
    </section>
  );
};
