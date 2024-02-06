import Link from "next/link"


const Navbar = () => {
    return (
        <div>
        <h1>Navbar</h1>
        <ul>
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