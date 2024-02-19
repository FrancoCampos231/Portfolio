import Link from "next/link"

export  const metadata = {
    title: "Mis proyectos - Portfolio Franco Campos"
}

const Proyects = () => {
    return (
        <div>
        <h1>Proyectos realizados</h1>
        <h3>
            <Link href="https://vinils-trade-client.vercel.app">Vinyls Trade</Link>
        </h3>
        </div>
    )
}

export default Proyects