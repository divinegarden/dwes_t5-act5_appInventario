import Image from "next/image"
import Link from "next/link"

function notFound() {
    return (
        <section className="not-found">
            <h1>Contenido no encontrado </h1>
            <hr />
            <Image src="/not-found.webp" width={200} height={200} alt="imagen" />
            <p>El contenido que estás buscando no se ha encontrado. </p>
            <p>Puedes volver al inicio pulsando <Link href={"/"}> aquí</Link>.</p>
        </section>
    )
}

export default notFound