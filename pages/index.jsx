import Imageacceuil from "../public/Imageacceuil.jpeg";
import Image from "next/image";
import styles from "../styles/Acceuil.module.css";
import Head from "next/head";

/**
 * Fonction qui retourne la composante de la page d'acceuil
 * @returns balise acceuil
 */
export default function Accueil() {

    return <>
        <Head>
            <title>Marc-Raphael Chehab - Accueil</title>
            <meta name="Description" content="page d'accueil de mon portefolio" />
            <meta property="og:title" content="Marc-Raphael Chehab - Accueil" />
            <meta property="og:description" content="Voici la page d'accueil de mon portefolio" />
            <meta property="og:image" content="http://localhost:3000" />
        </Head>
        <main>
            <div className={styles.conteneur}>
                <Image src={Imageacceuil} alt="image1marc" className={styles.Imageacceuil} />
                <div className={styles.texteunis}>
                    <h2 className={styles.Phraseaccueil}>Programmeur certifié</h2>
                    <h2 className={styles.Phraseaccueil2}> et prêts aux défis de la technologie.</h2>
                </div>
            </div>
        </main>
    </>
}