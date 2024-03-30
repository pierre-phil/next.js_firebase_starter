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
  title: "Next.js - Firebase starter",
};

/* Component
-------------------------------------------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.className}>
      <body>{children}</body>
    </html>
  );
}
