import Head from "next/head";
import React from "react";
import { Navigation } from "../component/Navbar";
import styles from "../styles/Home.module.css";

function docs() {
  return (
    <div>
      <Head>
        <title> Troopr Docs</title>
        <meta name="description" content="Docs of troopr.io" />
      </Head>
      <Navigation />
      <h2 className={styles.heading}>Welcome to the Documentation</h2>
      <p className={styles.para}> we are delighted to have you here</p>
    </div>
  );
}

export default docs;
