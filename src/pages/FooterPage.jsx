import { SiLinkedin,SiTelegram } from "react-icons/si";
import { BsGithub,BsTelephoneFill } from "react-icons/bs";

import styles from './footer.module.css'
const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.footer__div_text}>
                <p>Follow Us</p>
            </div>
            <div className={styles.icon}>
                <a href="https://www.linkedin.com/in/atefeh-masoumi-b80a821ab/"><SiLinkedin  size= {30}/></a>
                <a href="https://github.com/Atefeh-Masoumi"><BsGithub size= {30}/></a>
                <a href="https://telegram.me/Atefeh652"><SiTelegram size= {30}/></a>
                <a href="te1:+989118648663"><BsTelephoneFill size= {30} color="#4c1d95"/></a>

            </div>
        </footer>
     );
}
 
export default Footer;