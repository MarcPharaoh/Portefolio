import togglestyles from "../styles/Toggler.module.css";
import styles from "../styles/Menu.module.css";
import Toggler from "./Toggler";
import Link from "next/link";
/**
 * une fonction qui retourne le componement du menu
 * @param {setPage} param0 
 * @returns balise menu
 */
export default function Menu() {
    return <nav>
        <div className={styles.Menu}>
            <Link href="/Apropos" className={styles.Liens}>À propos</Link>
            <div className={togglestyles.liste}>
                <Toggler titre="Projets">
                    <div className={togglestyles.les2projets}>
                        <Link href="/projet1" className={styles.Lienstog}>Tournois de jeux videos</Link>
                        <Link href="/projet2" className={styles.Lienstog}>Bibliotheque</Link>
                    </div>
                </Toggler>
            </div>
            <Link href="/Contact" className={styles.Liens}>Contact</Link>
        </div>
    </nav>
}