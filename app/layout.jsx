import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <nav>
        <Navbar/>
      </nav>
      {children}
      </body>
    </html>
  )
}
