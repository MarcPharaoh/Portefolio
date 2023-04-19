import Head from "next/head";
import FormNoControl from "../components/FormNoControl";
import styles from "../styles/Forms.module.css"

/**
 * une fonction qui retourne le composant de la page contact
 * @returns la page contact
 */
export default function Contact() {
    return <>
        <Head>
            <title>Marc-Raphael Chehab - Contactez-moi</title>
            <meta name="description" content="Contactez-moi par cette page" />
            <meta property="og:title" content="Marc-Raphael Chehab - Contactez-moi" />
            <meta property="og:description" content="Mon nom est Marc-Raphael Chehab Page de Contact de mon portefolio qui va vous permettre de me contacter par votre nom, votre email et votre message." />
            <meta property="og:image" content="http://localhost:3001/logo.png" />
        </Head>
        <main>
            <section>
            <h2 className={styles.titre}>Contactez-moi</h2>
                <FormNoControl />
            </section>
        </main>
    </>
}