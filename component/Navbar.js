import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Button from "@mui/material/Button";

export const Navigation = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <ul className={styles.list}>
            <Link href="/">
              <a>
                <h2 className={styles.item}>Home</h2>
              </a>
            </Link>

            <Link href="/products">
              <a>
                <h2 className={styles.item}>Products</h2>
              </a>
            </Link>
            <Link href="/docs">
              <a>
                <h2 className={styles.item}>Docs</h2>
              </a>
            </Link>
          </ul>
        </div>
      </nav>
      <Button>hello there</Button>
    </>
  );
};
