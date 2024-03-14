import Link from "next/link"
import "../app/global.css"


const Navbar = () => {
    return (
        <div className="bg-colorNab flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-auto">Navbar</h1>
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/proyectos">Proyectos</Link>
          </li>
        </ul>
        </div>
    )
}

export default Navbar