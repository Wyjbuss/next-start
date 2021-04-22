import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-Start</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This Next.js app that was deployed to Vercel
        </h1>

        <p className={styles.description}>
          Getting to know next.js. Making a store front with these cards here.<br />
          Imported bootstrap and react-bootstrap because I plan on using alot of the styles.
          </p>
          
        

        {/* grid with cards go here
        
        grid card card
         */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed to{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home
