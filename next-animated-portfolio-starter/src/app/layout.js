import React from 'react'; // Add this import
import "./globals.css";
import TransitionProvider from "../components/TransitionProvider";

export const metadata = {
  title: "Razaa | Dev Portfolio",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden"
      data-new-gr-c-s-check-loaded="14.1092.0"
      data-gr-ext-installed=""
      >
        <TransitionProvider>{children}</TransitionProvider>

        
      </body>
    </html>
  );
}
