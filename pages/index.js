import Head from 'next/head';
import Search from '../components/search';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>SHY SNAPS | HOME</title>
        <meta name='keywords' content='images' />
      </Head>
      <div className={styles.container}>
        <Search style={styles.search} size={25} />
      </div>
    </>
  );
}
