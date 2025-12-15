'use client'
import { use } from "react"

import Modal from "@/components/modal"
import Form from "@/components/articulos/form"

import { updateArticulo, deleteArticulo } from "@/lib/actions"
import Link from "next/link"


export default function ListaArticulos({ promesaArticulos }) {
    const articulos = use(promesaArticulos)   // Resolvemos promesa

    return (
        <div className="flex flex-wrap gap-4">
            {articulos.map(articulo => <Item key={articulo.id} articulo={articulo} />)}
        </div>
    )
}


function Item({ articulo }) {
    return (
        <div className="grid sm:grid-cols-[112px_1fr] gap-2 border border-slate-200 bg-slate-100 w-96 p-8 rounded">
            {/* Imagen */}
            <Link prefetch href={`/articulos/${articulo.id}`} className="font-bold text-xl">
                <img src={articulo.imagen || '/imagen-vacia.png'} />
            </Link>

            <div>
                {/* Título */}
                <p className="font-bold text-xl">
                    {articulo.nombre}
                </p>

                {/* Descripción */}
                <p>{articulo.descripcion}</p>

                {/* Precio */}
                <p>{articulo.precio} €</p>

                {/* Botones */}
                <div className="mt-4 flex gap-4 justify-end">
                    <Modal openElement={
                        <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>EDITAR</p>
                    }>
                        <Form action={updateArticulo} title={"Actualizar artículo"} articulo={articulo} />
                    </Modal>
                    <Modal openElement={
                        <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>ELIMINAR</p>
                    }>
                        <Form action={deleteArticulo} title={"Eliminar artículo"} articulo={articulo} disabled />
                    </Modal>
                </div>
            </div>
        </div>
    )
}