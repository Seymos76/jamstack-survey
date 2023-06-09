import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Thank() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sondage pour une initiation au 3e oeil et à sa multidimension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Merci pour votre participation !
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
