import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BFF_URL}/api/hello`);
  const { name } = await res.json();
  return { props: { name } };
};

export default function Home({ name }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac AWS, SSR Rendered Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tic Tac AWS</h1>
        <h2>Data from API route (BFF):</h2>
        <div>{name}</div>
      </main>
    </div>
  );
}
