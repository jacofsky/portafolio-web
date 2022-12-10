import { Layout } from '../components/layouts'
import { Button, Heading } from '../components/ui'
import styles from '../styles/pages/contacto.module.css'

const ContactoPage = () => {
  return (
    <Layout title='Contacto - Valentin Jacofsky'>
        <section className={styles.section}>
            <div className={styles.boxInfo}>
                <Heading fontSize={4.188} h={1} text="Contacto"/>
                <p>
                  Complete el <span>formulario</span> <hr/>
                  o agende una <span>reunión en meet!</span>
                </p>
                <Button text='Agendar meet' action={() => console.log('Agendar meet')}/>
            </div>

            <form className={styles.form}>
              <div>
                <label htmlFor="name">Nombre y apellido</label>
                <input className={styles.input} style={true && {borderColor: 'red'}} type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input className={styles.input}  type="email" name="email" id="email" />
              </div>

              <div>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className={styles.textArea}  name="mensaje" id="mensaje" />
              </div>

              <div className={styles.button}>
                <Button text='Enviar mensaje' action={() => console.log('Enviar mensaje')}/>
              </div>
            </form>
        </section>
    </Layout>
  )
}

export default ContactoPage