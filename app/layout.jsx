import Link from "next/link"
import Navbar from "@/components/Navbar"
import {
  Permanent_Marker
} from 'next/font/google'

export const metadata = {
  title: "Bienvenido a mi Portofolio - Portfolio Franco Campos",
  description: "Esta es la pagina de bienvenida de mi portfolio",
  keyboard: "portfolio, franco, campos"
}

const permanentM = Permanent_Marker({
  weight: [ "400" ],
  style: ["normal"],
  subsets: ["latin"]
})


export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={permanentM.className}>
      <nav>
        <Navbar/>
      </nav>
      {children}
      </body>
    </html>
  )
}
