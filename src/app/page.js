/* Imports
-------------------------------------------------- */

// styles
import styles from "./styles.module.scss";

// fonts
import { caveat } from "./fonts";

/* Component
-------------------------------------------------- */

export default function Home() {
  return (
    <main>
      <h1 className={`text-center title ${styles.title1}`}>
        <span className={`${caveat.className} ${styles.line1}`}>
          Next.js 13 starter
        </span>
        <br />
        <span className={`${caveat.className} ${styles.line2}`}>by </span>
        <span>Pierre Phil</span>
      </h1>
    </main>
  );
}
