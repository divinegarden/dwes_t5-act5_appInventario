'use client'
import { notFound } from "next/navigation"
import { use } from "react"



export default function InfoArticulo({ promesaArticulo, promesaPrueba }) {
    const articulo = use(promesaArticulo)  // Resolvemos promesa

    if (!articulo) notFound()

    return (
        <article className=" grid place-items-center md:grid-cols-[30%_1fr] gap-4 bg-slate-100 border border-slate-200">
            <img src={articulo.imagen || '/imagen-vacia.png'} />
            <div className="flex flex-col w-full h-full text-xl p-8 rounded">
                <strong>{articulo.nombre}</strong>
                <p>{articulo.descripcion}</p>
                <p>{articulo.precio} €</p>
            </div>
        </article>
    )
}


export function Prueba({ promesaPrueba }) {
    const prueba = use(promesaPrueba)
    return <p>{prueba.success}</p>
}
