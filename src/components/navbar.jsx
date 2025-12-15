import Link from "next/link"

function Navbar() {
    return (
        <nav className="flex justify-between text-2xl p-2 bg-blue-200 font-bold">
            <div className="flex gap-4">
                <Link href="/">🏠</Link>
                <Link href="/articulos">Artículos</Link>
                <Link href="/proveedores">Proveedores</Link>
            </div>
            <div>
                <Link href="/acerca">Acerca de ...</Link>
            </div>
        </nav>
    )
}

export default Navbar