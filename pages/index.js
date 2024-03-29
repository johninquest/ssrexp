import React from "react";
import Head from "next/head";
import styles from "../styles/page/Home.module.scss";
/* import Link from "next/link"; */
import Button from "@mui/material/Button";
import Router from "next/router";

export default function Home() {
  let _currentYear = new Date().getFullYear();
  const router = Router;

  const al = () => alert("I am here!");
  return (
    <div className={styles.container}>
      <Head>
        <title>A simple next.js app</title>
        <meta
          name="description"
          content="A simple next.js application for testing ssr"
        />
        <meta name="author" content="john apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>welcome to finbits</div>
        {/*  <div>
          <Button variant="contained" color="secondary" onClick={al}>
            make some noise
          </Button>
        </div> */}
        <div className={styles.btns}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/contact")}
          >
            contact
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/markets")}
          >
            markets
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/prices")}
          >
            prices
          </Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://johnapps.de" target="_blank" rel="noopener noreferrer">
          <span>&copy;</span>
          <span>&nbsp;</span>
          <span style={{ textTransform: "uppercase" }}>john apps</span>
          <span>&nbsp;</span>
          <span>{_currentYear}</span>
        </a>
      </footer>
    </div>
  );
}
