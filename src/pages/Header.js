import { useEffect } from "react";
import styles from "./header.module.css";
import img from "../asset/wio-8-mens-road-running-shoes-vKc7d1.jfif";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


const Header= () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={styles.homecontainer}>
      <section className={styles.wrappHome}>
        <div className={styles.left}>
          <h2 data-aos="fade-right">
            Every Purchase Will Be Made With Pleasure
          </h2>
          <p data-aos="fade-up-right">
            If you want to buy your favorite sneakers, you'd better hurry. Just
            browse through hundreds of collections
          </p>
          <Link to="/">
            <button data-aos="fade-up-left" className={styles.btnhome}>
              Check Out Produccts
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.homeImage}>
            <img
              data-aos="fade-left"
              className={styles.sneakerimage}
              src={img}
              alt="hi"
            />
          </div>
        </div>
      </section>
     
      
      
    </section>
  );
};

export default Header;
