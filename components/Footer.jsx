import styles from "../styles/Footer.module.css"
import linkedin from "../public/linkedin.png"
import facebook from "../public/facebook.png"
import Image from "next/image";

/**
 * Une fonction qui retourne la composante du footer
 * @returns balise footer
 */
export default function Footer() {
    return <div className={styles.Footer}>
        <a target="_blank" href="https://www.linkedin.com/in/marc-rapha%C3%ABl-chehab-a005911b6/" rel="noreferrer">
            <Image src={linkedin} alt="linkedin" className={styles.logo} />
        </a>
        <a target="_blank" href="https://www.facebook.com/marc.chehab.37" rel="noreferrer">
            <Image src={facebook} alt="facebook" className={styles.logo} />
        </a>
    </div>
}
