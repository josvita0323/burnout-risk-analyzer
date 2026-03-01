import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-slate-800">
        <Navbar />
        <main className="w-full min-h-screen px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
