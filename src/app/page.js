"use client";

/* Imports
-------------------------------------------------- */

// styles
import styles from "./styles.module.scss";

// fonts
import { caveat } from "./fonts";

// firebase
import { app } from "../../firebase/app";
import { getDatabase, get, ref } from "firebase/database";

/* Component
-------------------------------------------------- */

export default function Home() {
  // get Firebase Relatime databse sample value
  const getData = async function () {
    const db = getDatabase(app);
    const dataRef = ref(db, "test");
    const snapshot = await get(dataRef);
    const data = snapshot.val();

    console.log("data :", data);
  };

  // getData();

  return (
    <main>
      <h1 className={`text-center title ${styles.title1}`}>
        <span className={`${caveat.className} ${styles.line1}`}>
          Next.js starter
        </span>
      </h1>
    </main>
  );
}
