import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import AuthProvider from "@/utils/auth-session-provider";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"]
});


export const metadata: Metadata = {
  title: "StudyFlow | Organize suas tarefas de forma fácil",
  description: "Uma ferramenta para organizar, priorizar e visualizar suas tarefas de forma eficiente",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
