import { About, Contact, Hero, Projects } from '@/components';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <Hero className={styles.hero} />
        <Projects className={styles.projectSection} />
        {/* <Contact className={styles.contactSection} /> */}
        {/* <About className={styles.aboutSection} /> */}
      </main>
    </>
  );
}
