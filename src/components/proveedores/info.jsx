'use client'
import { notFound } from "next/navigation"
import { use } from "react"



export default function InfoProveedor({ promesaProveedor, promesaPrueba }) {
    const proveedor = use(promesaProveedor)  // Resolvemos promesa

    if (!proveedor) notFound()

    return (
        <article className=" grid place-items-center md:grid-cols-[30%_1fr] gap-4 bg-slate-100 border border-slate-200">
            <img src={proveedor.imagen || '/imagen-vacia.png'} />
            <div className="flex flex-col w-full h-full text-xl p-8 rounded">
                <strong>{proveedor.nombre}</strong>
                <p>{proveedor.descripcion}</p>
            </div>
        </article>
    )
}


export function Prueba({ promesaPrueba }) {
    const prueba = use(promesaPrueba)
    return <p>{prueba.success}</p>
}
