import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const inter = Inter({ subsets: ["latin"]});

const theme = createTheme({
  primaryColor: 'cyan',
  fontFamily: 'Inter, sans-serif',
  white: 'black',
  black: 'white',
});

export const metadata: Metadata = {
  title: "Reserve Me",
  description: "Reserving an appointment has never been easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <html lang="en">
      <body className={`${inter.className} bg-neutral-800 antialiased w-screen`} >
        <MantineProvider theme={theme}>{children}</MantineProvider>
        </body>
    </html>
  );
}
