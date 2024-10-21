import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export const metadata = {
  title: 'Главная страница'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
