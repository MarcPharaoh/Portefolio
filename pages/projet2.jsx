import Image7 from "../public/Accueil.png"
import Image8 from "../public/Connexion2.png"
import Image9 from "../public/Inscription2.png"
import Image10 from "../public/Contactez-nous.png"
import styles from "../styles/Projet2.module.css";
import Image from "next/image";
import Head from "next/head";
/**
 * une fonction qui retourne le projet2
 * @returns projet2
 */
export default function Projet2() {
    return <>
    <Head>
            <title>Marc-Raphael Chehab - projet2</title>
            <meta name="Description" content="projet2 de mon portefolio" />
            <meta property="og:title" content="Marc-Raphael Chehab - projet2" />
            <meta property="og:description" content="Voici le projet2 de mon portefolio qui est la bibliotheque de reservation de livres." />
            <meta property="og:image" content="http://localhost:3000" />
        </Head>
        <div className={styles.body}>
            <div className={styles.slider}>
                <a href="#slide-1">Accueil</a>
                <a href="#slide-2">Connexion</a>
                <a href="#slide-3">Inscription</a>
                <a href="#slide-4">Contactez-nous</a>
                <div className={styles.slides}>
                    <div id="slide-1"><Image src={Image7} alt="Accueil" className={styles.Imageprojet2} /></div>
                    <div id="slide-2"><Image src={Image8} alt="Connexion" className={styles.Imageprojet2} /></div>
                    <div id="slide-3"><Image src={Image9} alt="Inscription" className={styles.Imageprojet2} /></div>
                    <div id="slide-4"><Image src={Image10} alt="Contactez-nous" className={styles.Imageprojet2} /></div>
                </div>

            </div>
            <p className={styles.texteprojet2}>Ce projet consistait à réaliser une plateforme en ligne qui permettait
                à l’utilisateur de réserver un livre dans une bibliothèque.
                L’utilisateur devait d’abord se connecter pour une réservation.
                S’il n’avait pas de compte on l’invitait à en créer un afin de pouvoir réserver des livres.
                L’utilisateur pouvait aussi contacter l’administrateur pour une demande particulière par la page contactez-nous.
                L’administrateur a son propre compte pour gérer les demandes des clients.
                Il avait aussi la possibilité d’ajouter ou de supprimer un livre.
                Cette plateforme a été développée avec Visual studio code et on a utilisé html, Css et javascript,
                nous avons ajouté une base de données pour configurer et stocker les informations nécessaires au fonctionnement.
            </p>
        </div>
    </>
}