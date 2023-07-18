/* Imports
-------------------------------------------------- */

// styles
import "./global.scss";
import "the-new-css-reset/css/reset.css";

// fonts
import { jost } from "./fonts";

/* Metadata
-------------------------------------------------- */

export const metadata = {
  title: "MANON KOLTES x OZENKAWA - Nouveau Jour - Stream & follow",
  description:
    "Le nouveau titre de MANON KOLTES et OZENKAWA est disponible partout. Retrouvez tous les liens de streaming et de téléchargement, les profils des artistes et les dernières infos.",
};

/* Component
-------------------------------------------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={jost.className}>
      <body>{children}</body>
    </html>
  );
}
