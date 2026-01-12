
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PropertySniper.ai</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to PropertySniper.ai</h1>
        <p className={styles.description}>AI‑Driven Real Estate Deal Analysis — Coming Soon.</p>
      </main>
    </div>
  );
}
