import Alert from "../components/Alert";
import "../globals.css";

export default function PreviewLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Alert />
        {children}
      </body>
    </html>
  );
}
