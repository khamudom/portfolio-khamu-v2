import { About, Contact, Hero, Projects } from '@/components';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <Hero className={styles.hero} />
        <Projects className={styles.section} />
        <Contact className={styles.section} />
        {/* <About className={styles.aboutSection} /> */}
      </main>
    </>
  );
}
