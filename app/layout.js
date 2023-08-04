"use client";
import Header from "@components/Header";
import "./styles/globals.css";
import Nav from "@common/Nav";

export default function MainLayout({ children }) {
  return (
    <html>
      <body>
        <div className="min-h-full">
          <Header />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
//Debajo de Header va <Nav />
