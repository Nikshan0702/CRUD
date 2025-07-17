import './globals.css';




export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}