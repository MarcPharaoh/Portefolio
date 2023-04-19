import styles from "../styles/Apropos.module.css";
import Head from "next/head";
import Imageapropos from "../public/Imageapropos.png";
import Image from "next/image";

/**
 * Fonction qui retourne la composante de la page À propos
 * @returns balise À propos
 */
export default function Apropos() {
    return <>
        <Head>
            <title>Marc-Raphael Chehab - À propos</title>
            <meta name="description" content="À propos de Marc-Raphael Chehab" />
            <meta property="og:title" content="Marc-Raphael Chehab - À propos" />
            <meta property="og:description" content="Cette page vous permettra de mieux me connaitre avec des informations de moi comme mes connaissances et mes outils" />
            <meta property="og:image" content="http://localhost:3001/logo.png" />
        </Head>
        <div className={styles.body}>
            <Image src={Imageapropos} alt="ImageApropos" className={styles.Imageapropos} />
            <div className={styles.apropunis}>
                <div className={styles.Textepar}>
                    <h3>À propos</h3>
                <p className={styles.Apropostext1}>Je m&apos; appelle Marc-Raphaël Chehab et je suis actuellement diplômé et certifié
                    de La Cité collégiale. Je suis un expert dans le domaine de l&apos; informatique. Mon but est de programmer,
                    d&apos; analyser des logiciels informatiques ainsi que toutes leurs composantes. J&apos; aimerais acquérir
                    de l&apos; expérience dans ce domaine de la technologie de l&apos; information.
                </p>
                </div >
                <div className={styles.Textepar}>
                    <h3>Compétence</h3>
                <p className={styles.Apropostext2}> Je maîtrise Java, C#, HTML, CSS, JavaScript, Node.js, React.js et XAML.
                    Je maîtrise les bases de données SQL et NoSQL (Cassandra), ainsi que MongoDB.
                </p>
                </div>
                <div className={styles.Textepar}>
                    <h3>Outils</h3>
                <p className={styles.Apropostext3}> Les outils que j&apos; utilise pour le développement sont Visual Studio,
                    Visual Studio Code, IntelliJ, Git, Apache NetBeans, Xcode, Android Studio, etc.
                </p>
                </div>
            </div>
        </div>


    </>
}
