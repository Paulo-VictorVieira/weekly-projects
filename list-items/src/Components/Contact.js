import React from 'react';
import styles from '../Styles/Contact.module.css';
import foto from '../Assets/contato.jpg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="List-Items | Contact" description="Contact Me." />
      <img src={foto} alt="Typewriter" />
      <div className={styles.personal}>
        <h1>Contact Me !</h1>
        <ul>
          <li>Email: pvcunha05@gmail.com</li>
          <li>Location: Brazil</li>
          <li>
            GitHub Profile:
            <a href="https://github.com/pv-cunha" className={styles.profile}>
              pv-cunha
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
