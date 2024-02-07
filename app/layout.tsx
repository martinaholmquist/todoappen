import Navbar from "@/components/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { AuthProvider } from "@/components/AuthContext"

export const metadata: Metadata = {
  title: "family dinner app",
  description: "Discover an amazing family app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <AuthProvider>
          {/* AuthProvider encapsulates its children with the AuthContext */}
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
