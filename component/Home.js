import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title> Troopr Home</title>
        <meta name="description" content="home page of troopr.io" />
      </Head>
      <h2 className={styles.heading}>Welcome to the Troopr.io</h2>
      <p className={styles.para}> we are delighted to have you here</p>
    </div>
  );
};

export default Home;
