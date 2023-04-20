import Image1 from "../public/Liste de tournois.png";
import Image2 from "../public/Page mon compte.png";
import Image3 from "../public/Inscription.png";
import Image4 from "../public/Connexion.png";
import Image5 from "../public/administrateur.png";
import Image6 from "../public/Supression tournois.png";
import Image from "next/image";
import styles from "../styles/Projet1.module.css";
import Head from "next/head";
/**
 * une fonction qui retourne le component du projet1
 * @returns le projet1
 */
export default function Projet1() {
    return <>
        <Head>
            <title>Marc-Raphael Chehab - projet1</title>
            <meta name="Description" content="projet1 de mon portefolio" />
            <meta property="og:title" content="Marc-Raphael Chehab - projet1" />
            <meta property="og:description" content="Voici le projet 1 qui est le tournois de jeux-videos de Marc-Raphael Chehab" />
            <meta property="og:image" content="http://localhost:3000" />
        </Head>
        <div className={styles.body}>
            <div className={styles.slider}>
                <a href="#slide-1">Liste de tournois</a>
                <a href="#slide-2">Page mon compte</a>
                <a href="#slide-3">Inscription</a>
                <a href="#slide-4">Connexion</a>
                <a href="#slide-5">administrateur</a>
                <a href="#slide-6">Supression de tournois</a>
                <div className={styles.slides}>
                    <div id="slide-1"><Image src={Image1} alt="Liste de tournois" className={styles.Imageprojet1} /></div>
                    <div id="slide-2"><Image src={Image2} alt="Page mon compte" className={styles.Imageprojet1} /></div>
                    <div id="slide-3"><Image src={Image3} alt="Inscription" className={styles.Imageprojet1} /></div>
                    <div id="slide-4"><Image src={Image4} alt="Connexion" className={styles.Imageprojet1} /></div>
                    <div id="slide-5"><Image src={Image5} alt="administrateur" className={styles.Imageprojet1} /></div>
                    <div id="slide-6"><Image src={Image6} alt="Supression de torunois" className={styles.Imageprojet1} /></div>
                </div>
            </div>
            <p className={styles.texteprojet1}>Ce projet consistait à réaliser une plateforme en ligne qui permet à l’utilisateur
                de s’inscrire à un tournoi en ligne. L’utilisateur peut s’inscrire à un ou plusieurs tournois et peut se désinscrire.
                L’utilisateur doit évidemment se connecter afin de pouvoir effectuer une telle action. L’utilisateur a une page pour son compte.
                L’administrateur a son propre compte, il peut également supprimer un tournoi ou bien en créer un nouveau. Afin de développer l’application web,
                nous avons utilisé Visual Studio code. Nous avons utilisé le langage html, Css, Javascript et node.js.
            </p>
        </div>
    </>
}