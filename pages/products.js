import Head from "next/head";
import React from "react";
import { Navigation } from "../component/Navbar";
import styles from "../styles/Home.module.css";

function products() {
  return (
    <div>
      <Head>
        <title> Troopr Products</title>
        <meta
          name="description"
          content="Products and services offered by Troopr"
        />
      </Head>
      <Navigation />
      <h2 className={styles.heading}>Welcome to the Products Page</h2>
      <p className={styles.para}> we are delighted to have you here</p>
    </div>
  );
}

export default products;
