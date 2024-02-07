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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
